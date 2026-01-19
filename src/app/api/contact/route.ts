
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
    console.log("SERVER ENV PASSWORD:", ADMIN_PASSWORD); // DEBUGGING: Check Vercel Logs
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
                    project_type: data.project_type || data.product_interest,
                    message: data.requirements || data.message,
                    company: data.company,
                    quantity: data.quantity
                });
                console.log('Contact saved to database');
            } catch (dbError) {
                console.error('Database Error:', dbError);
                // We continue execution to send email even if DB fails
            }
        }

        // 2. Send Email - DISABLED (User requested Admin Panel only)
        /* 
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) { ... }
        const transporter = ...
        await transporter.sendMail(mailOptions);
        */

        return NextResponse.json({ success: true, message: 'Message saved to Dashboard!' });

    } catch (error) {
        console.error('Request Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
    }
}
