/**
 * Aufruf: GMI_API_KEY=dein_key npx ts-node test/api_integration_test.ts
 */

const API_KEY = process.env.GMI_API_KEY;
const BASE_URL = 'https://api.getmyinvoices.com/accounts/v3';

if (!API_KEY) {
    console.error('❌ Error: GMI_API_KEY environment variable is not set.');
    process.exit(1);
}

const resources = [
    { name: 'Bank Accounts', endpoint: '/bankAccounts' },
    { name: 'Companies', endpoint: '/companies' },
    { name: 'Documents', endpoint: '/documents' },
    { name: 'Sync Accounts', endpoint: '/syncAccounts' },
    { name: 'Users', endpoint: '/users' },
    { name: 'Tags', endpoint: '/tags' },
    { name: 'Countries', endpoint: '/countries' },
];

async function runFullIntegrationTest() {
    console.log('🚀 Starting Full GetMyInvoices API Test (Detailed Mode)...\n');

    for (const res of resources) {
        try {
            console.log(`📡 Testing [${res.name}] (GET ${res.endpoint})...`);

            const response = await fetch(`${BASE_URL}${res.endpoint}`, {
                headers: { 'X-API-KEY': API_KEY as string },
            });

            const body = await response.json() as any;

            if (response.ok) {
                // Logik zur Bestimmung des Datenfeldes
                let items = null;
                let sourceField = 'flat array';

                if (body.records && Array.isArray(body.records)) {
                    items = body.records;
                    sourceField = 'records';
                } else if (body.data && Array.isArray(body.data)) {
                    items = body.data;
                    sourceField = 'data';
                } else if (Array.isArray(body)) {
                    items = body;
                }

                if (items) {
                    console.log(`✅ Success! Found ${items.length} items via [${sourceField}].`);

                    // Bank-Transaktionen Spezialtest
                    if (res.endpoint === '/bankAccounts' && items?.[0]?.bankAccountUid) {
                        await testTransactions(items[0].bankAccountUid);
                    }
                } else {
                    console.warn(`⚠️ Warning: Response was successful but no standard list field found.`);
                    console.log('Full Response Data:', JSON.stringify(body, null, 2));
                }
            } else {
                console.error(`❌ API Error (${response.status}):`);
                console.error(JSON.stringify(body, null, 2));
            }
        } catch (error) {
            console.error(`💥 Request crashed for ${res.name}:`, error);
        }
        console.log('---');
    }
}

async function testTransactions(uid: number) {
    console.log(`🔍 Testing Transactions for Bank UID: ${uid}...`);
    const query = new URLSearchParams();
    query.append('bankAccountsUid[]', uid.toString());

    const response = await fetch(`${BASE_URL}/bankTransactions?${query.toString()}`, {
        headers: { 'X-API-KEY': API_KEY as string },
    });
    const body = await response.json() as any;

    if (response.ok) {
        console.log(`✅ Transactions: Found ${body.records?.length || 0} items.`);
    } else {
        console.error(`❌ Transaction Test failed! Detail:`);
        console.error(JSON.stringify(body, null, 2));
    }
}

runFullIntegrationTest();