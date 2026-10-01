import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { name, email, phone, message, website } = body ?? {};

  // Honeypot — bots that fill the hidden field get a fake success.
  if (website) {
    return NextResponse.json({ ok: true, message: 'Thank you!' });
  }

  // Validation
  const errors = {};
  if (!name || String(name).trim().length < 2) {
    errors.name = 'Please share your name.';
  }
  if (!email || !EMAIL_RE.test(String(email))) {
    errors.email = 'Please enter a valid email address.';
  }
  if (phone && String(phone).trim() && !/^[+\d][\d\s\-()]{6,19}$/.test(String(phone).trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!message || String(message).trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanPhone = phone ? String(phone).trim() : '';
  const cleanMessage = String(message).trim();

  let delivered = false;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || 587);

  if (host && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Grace Cathedral Website" <${user}>`,
        to: process.env.CONTACT_TO_EMAIL || user,
        replyTo: `${cleanName} <${cleanEmail}>`,
        subject: `New website message from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone || '—'}\n\n${cleanMessage}`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
            <div style="background:#4B0082;padding:18px 24px">
              <p style="margin:0;color:#FFD700;font-size:18px;font-weight:bold">Grace Cathedral Church</p>
              <p style="margin:4px 0 0;color:#ede4f7;font-size:12px">New message from the website contact form</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#374151">
              <tr><td style="padding:8px 24px;color:#6b7280;width:90px">Name</td><td style="padding:8px 24px;font-weight:bold">${cleanName}</td></tr>
              <tr><td style="padding:8px 24px;color:#6b7280">Email</td><td style="padding:8px 24px"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
              <tr><td style="padding:8px 24px;color:#6b7280">Phone</td><td style="padding:8px 24px">${cleanPhone || '—'}</td></tr>
              <tr><td colspan="2" style="padding:16px 24px;border-top:1px solid #f3f4f6;white-space:pre-line">${cleanMessage}</td></tr>
            </table>
          </div>`,
      });
      delivered = true;
    } catch (err) {
      console.error('[contact] Failed to send email:', err);
      return NextResponse.json(
        {
          ok: false,
          message:
            'We could not send your message right now. Please try again shortly, or reach us on WhatsApp.',
        },
        { status: 502 }
      );
    }
  } else {
    // No SMTP configured — validate + log so local demos still work.
    console.log('[contact] Message received (SMTP not configured):', {
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage.slice(0, 300),
    });
  }

  return NextResponse.json({
    ok: true,
    delivered,
    message: 'Asante sana! Your message has been received — we will be in touch soon.',
  });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Contact API — POST { name, email, phone, message }',
  });
}
