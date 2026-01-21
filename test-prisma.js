require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    log: ['query', 'error', 'warn'],
});

async function testPrismaConnection() {
    try {
        console.log('DATABASE_URL:', process.env.DATABASE_URL?.substring(0, 50) + '...');
        console.log('\nTesting Prisma connection...');

        // Try to fetch contacts
        const contacts = await prisma.contact.findMany();
        console.log(`✅ Successfully connected to database!`);
        console.log(`📊 Found ${contacts.length} contacts in database`);

        if (contacts.length > 0) {
            console.log('\nFirst contact:');
            console.log(JSON.stringify(contacts[0], null, 2));
        } else {
            console.log('\n📝 Database is empty - ready to receive form submissions!');
        }

        await prisma.$disconnect();
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Full error:', error);
        await prisma.$disconnect();
    }
}

testPrismaConnection();
