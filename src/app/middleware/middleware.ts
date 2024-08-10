import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Middleware running for path:", path);

  // Define which paths are protected
  const protectedPaths = ['/pages/artistlisting', '/pages/artistprofile'];

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(protectedPath => 
    path.startsWith(protectedPath)
  );

  // If it's a protected path, check for authentication
  if (isProtectedPath) {
    const authCookie = request.cookies.get('isLoggedIn');
    const authStorage = request.cookies.get('auth-storage');
    
    if (!authCookie || authCookie.value !== 'true' || !authStorage) {
      console.log("Authentication check failed, redirecting to login");
      return NextResponse.redirect(new URL('/pages/login', request.url));
    }

    try {
      const userData = JSON.parse(authStorage.value);
      if (!userData.state || !userData.state.user) {
        console.log("Invalid user data, redirecting to login");
        return NextResponse.redirect(new URL('/pages/login', request.url));
      }
    } catch (error) {
      console.error("Error parsing auth data:", error);
      return NextResponse.redirect(new URL('/pages/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/pages/artistlisting/:path*', '/pages/artistprofile/:path*'],
};