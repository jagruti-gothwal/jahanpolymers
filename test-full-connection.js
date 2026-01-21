const mysql = require('mysql2/promise');

async function testDirectConnection() {
    try {
        // Test with the exact credentials
        const connection = await mysql.createConnection({
            host: '62.72.28.52',
            port: 3306,
            user: 'u824472015_jahan',
            password: 'jahan@polymersJumbolite123',
            database: 'u824472015_jahanpolymers'
        });

        console.log('✅ Direct MySQL connection successful!');

        // Try to query the Contact table
        const [rows] = await connection.execute('SELECT * FROM Contact LIMIT 5');
        console.log(`✅ Found ${rows.length} contacts in database`);

        if (rows.length > 0) {
            console.log('\nFirst contact:', rows[0]);
        } else {
            console.log('\n📝 Database table exists but is empty');
        }

        await connection.end();

        // Now test with Prisma
        console.log('\n--- Testing Prisma Connection ---');
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: 'mysql://u824472015_jahan:jahan%40polymersJumbolite123@62.72.28.52:3306/u824472015_jahanpolymers'
                }
            },
            log: ['error', 'warn']
        });

        const contacts = await prisma.contact.findMany();
        console.log(`✅ Prisma found ${contacts.length} contacts`);
        await prisma.$disconnect();

    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Error code:', error.code);
    }
}

testDirectConnection();
