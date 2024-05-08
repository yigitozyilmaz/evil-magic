import { kv } from '@vercel/kv';

export async function POST(request, { params }) {
  const email = params.email;
  const decodedEmail = decodeURIComponent(email);

  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegexp.test(decodedEmail)) return new Response('Invalid email', { status: 400 });

  const emails = await kv.get('emails');
  if (emails.includes(decodedEmail)) return new Response('Email already exists', { status: 400 });

  await kv.set('emails', [...emails, decodedEmail]);
  return new Response('OK');
}

export async function GET(request, { params }) {
  if (params.email === process.env.EMAIL_SECRET) {
    const emails = await kv.get('emails');
    return new Response(emails.join('\n'));
  } return new Response('Unauthorized', { status: 401 });
}