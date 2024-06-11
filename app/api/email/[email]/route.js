import { kv } from '@vercel/kv';

export async function POST(request) {
    const { email } = await request.json();
    const decodedEmail = decodeURIComponent(email);

    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegexp.test(decodedEmail)) {
        return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }

    try {
        // E-posta adresini KV Store'a kaydet
        const existingEmails = await kv.get('emails') || [];
        if (existingEmails.includes(decodedEmail)) {
            return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 400 });
        }

        existingEmails.push(decodedEmail);
        await kv.set('emails', existingEmails);

        return new Response(JSON.stringify({ message: 'Email başarıyla saklandı' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Sunucu Hatası', details: error.message }), { status: 500 });
    }
}