import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.DEV_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { error: 'Password protection not configured' },
        { status: 500 }
      );
    }

    if (password === correctPassword) {
      // Create a simple hash for the cookie (in production, use a proper hash)
      const hash = Buffer.from(correctPassword).toString('base64');
      
      const response = NextResponse.json({ success: true });
      
      // Set authentication cookie (expires in 7 days)
      response.cookies.set('dev-auth', hash, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}


