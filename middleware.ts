import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  
  // Logic: Extract tenant from subdomain
  const tenant = hostname.split('.')[0]; 
  
  if (tenant && tenant !== 'www' && tenant !== 'your-main-domain') {
    return NextResponse.rewrite(new URL(`/${tenant}${url.pathname}`, req.url));
  }
  return NextResponse.next();
}
