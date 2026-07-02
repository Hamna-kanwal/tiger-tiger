import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/categories/')) {
    const parts = pathname.split('/').filter(p => p !== '');

    if (parts.length === 4) {
      const category = parts[1]; 
      const slug = parts[2];     
      const sku = parts[3];      

      if ((sku && /^\d+$/.test(sku)) || category === 'undefined') {
        const newUrl = `/products/${slug}/${sku}/`;
        return NextResponse.redirect(new URL(newUrl, request.url), 301);
      }
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/categories/:path*',
};