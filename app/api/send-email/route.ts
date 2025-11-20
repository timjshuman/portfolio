import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('⚠️ reCAPTCHA secret key not configured - allowing submission without verification');
    return { success: true };
  }

  if (!token) {
    console.warn('⚠️ No reCAPTCHA token provided - allowing submission without verification');
    return { success: true };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    if (data.success) {
      const score = data.score || 0;
      console.log('✅ reCAPTCHA verification passed. Score:', score);
      
      if (score >= 0.5) {
        return { success: true };
      } else {
        console.warn('⚠️ reCAPTCHA score too low:', score);
        return { success: false, error: `Low trust score (${score}). Please try again.` };
      }
    }
    
    console.error('❌ reCAPTCHA verification failed:', data['error-codes']);
    return { success: false, error: 'reCAPTCHA verification failed' };
  } catch (error) {
    console.error('❌ reCAPTCHA verification error:', error);
    // Allow submission on verification error (fail open)
    return { success: true };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    console.log('📧 Processing contact form submission from:', email);

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success) {
      console.error('❌ reCAPTCHA check failed:', recaptchaResult.error);
      return NextResponse.json(
        { error: recaptchaResult.error || 'Security verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please add RESEND_API_KEY to environment variables.' },
        { status: 500 }
      );
    }

    console.log('📤 Sending email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain after setup
      to: 'timjshuman@gmail.com', // Your email
      replyTo: email, // Sender's email
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('❌ Resend API error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 400 });
    }

    console.log('✅ Email sent successfully!');
    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}

