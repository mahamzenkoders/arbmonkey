import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value;

  const { pathname } = req.nextUrl.clone();
  const publicRoutes = ['/login'];

  const protectedRoutes = ['/', '/courses'];

  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
