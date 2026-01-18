
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

// Helper to check for auth
const isAuthenticated = (request: Request) => {
    const authHeader = request.headers.get('authorization');
    // Simple password protection: "Bearer <YOUR_ADMIN_PASSWORD_FROM_ENV>"
    // If no env var set, default to a temporary 'admin123' (CHANGE THIS IN PROD)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
    return authHeader === `Bearer ${ADMIN_PASSWORD}`;
};

export async function GET(request: Request) {
    try {
        if (!isAuthenticated(request)) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        // Graceful fallback if no DB is configured
        if (!process.env.MONGODB_URI) {
            return NextResponse.json({ success: true, data: [] });
        }

        await dbConnect();
        const contacts = await Contact.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: contacts });
    } catch (error) {
        console.error('Database Fetch Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to fetch contacts.' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // 1. Save to Database (Optional)
        // Only attempt to save if MONGODB_URI is provided
        if (process.env.MONGODB_URI) {
            try {
                await dbConnect();
                await Contact.create({
                    name: data.name || (data.firstName ? `${data.firstName} ${data.lastName}` : 'Unknown'),
                    email: data.email,
                    phone: data.phone,
                    project_type: data.project_type,
                    message: data.requirements || data.message
                });
                console.log('Contact saved to database');
            } catch (dbError) {
                console.error('Database Error:', dbError);
                // We continue execution to send email even if DB fails
            }
        }

        // 2. Send Email
        // Check for environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            return NextResponse.json(
                { success: false, message: 'Server configuration error: Missing email credentials.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "jahanpolimars88@gmail.com", // Send to the business email
            subject: `New Website Inquiry from ${data.name || data.firstName}`,
            text: `
                Name: ${data.name || (data.firstName + ' ' + data.lastName)}
                Email: ${data.email}
                Phone: ${data.phone || 'Not provided'}
                Project Type: ${data.project_type || 'Not specified'}
                Message: ${data.requirements || data.message}
            `,
            html: `
                <h3>New Inquiry from Website</h3>
                <p><strong>Name:</strong> ${data.name || (data.firstName + ' ' + data.lastName)}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                <p><strong>Project Type:</strong> ${data.project_type || 'Not specified'}</p>
                <br/>
                <p><strong>Message/Requirements:</strong></p>
                <p>${(data.requirements || data.message || '').replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message received and saved!' });

    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
    }
}
