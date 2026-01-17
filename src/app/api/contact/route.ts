import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();

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
            to: process.env.EMAIL_USER, // Send to yourself
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

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
    }
}
