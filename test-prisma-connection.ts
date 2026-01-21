import { prisma } from '@/lib/prisma';

async function testConnection() {
    try {
        console.log('Testing database connection...');
        const result = await prisma.$queryRaw`SELECT 1 as test`;
        console.log('✅ Database connection successful:', result);

        const contacts = await prisma.contact.findMany();
        console.log(`✅ Found ${contacts.length} contacts`);

        await prisma.$disconnect();
    } catch (error: any) {
        console.error('❌ Database error:', error.message);
        console.error('Full error:', error);
        await prisma.$disconnect();
    }
}

testConnection();
