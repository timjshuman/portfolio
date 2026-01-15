import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Skip authentication for the login page and API routes
  if (
    request.nextUrl.pathname === '/dev-login' ||
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Check if password is required (only in development/staging)
  const requirePassword = process.env.NEXT_PUBLIC_REQUIRE_PASSWORD === 'true';
  
  if (!requirePassword) {
    return NextResponse.next();
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get('dev-auth');
  const expectedHash = process.env.DEV_PASSWORD 
    ? Buffer.from(process.env.DEV_PASSWORD).toString('base64')
    : '';
  
  if (authCookie?.value === expectedHash) {
    return NextResponse.next();
  }

  // Redirect to login page
  return NextResponse.redirect(new URL('/dev-login', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

