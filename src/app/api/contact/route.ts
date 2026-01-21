import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper to check for auth
const isAuthenticated = (request: Request) => {
    const authHeader = request.headers.get('authorization');
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
    return authHeader === `Bearer ${ADMIN_PASSWORD}`;
};

export async function GET(request: Request) {
    try {
        if (!isAuthenticated(request)) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const contacts = await prisma.contact.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Map id to _id for frontend compatibility
        const mappedContacts = contacts.map(c => ({
            ...c,
            _id: c.id
        }));

        return NextResponse.json({ success: true, data: mappedContacts });
    } catch (error) {
        console.error('Database Fetch Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to fetch contacts from MySQL.' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const newContact = await prisma.contact.create({
            data: {
                name: data.name || (data.firstName ? `${data.firstName} ${data.lastName}` : 'Unknown'),
                email: data.email,
                phone: data.phone,
                project_type: data.project_type || data.product_interest,
                message: data.requirements || data.message,
                company: data.company,
                quantity: data.quantity,
                status: 'New'
            }
        });

        return NextResponse.json({ success: true, message: 'Message saved to Dashboard!', data: { ...newContact, _id: newContact.id } });

    } catch (error) {
        console.error('Request Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        if (!isAuthenticated(request)) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        const data = await request.json();
        // Frontend sends _id or id, handle both
        const id = data.id || data._id;
        const { status } = data;

        if (!id || !status) {
            return NextResponse.json({ success: false, message: 'Missing ID or Status' }, { status: 400 });
        }

        const updateData: any = { status };
        if (status === 'Contacted') {
            updateData.lastContactedAt = new Date();
        }

        const updatedContact = await prisma.contact.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json({ success: true, data: { ...updatedContact, _id: updatedContact.id } });
    } catch (error) {
        console.error('Update Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to update contact' }, { status: 500 });
    }
}
