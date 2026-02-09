import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'nl', 'pt'];
const defaultLocale = 'en';

function getLocale(request: Request): string {
  const headers = Object.fromEntries(request.headers.entries());
  const negotiatorHeaders: { 'accept-language'?: string } = {};
  if (headers['accept-language']) {
    negotiatorHeaders['accept-language'] = headers['accept-language'];
  }
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
}

/** Extensões de arquivos estáticos em public/ — não redirecionar para não quebrar imagens, fontes, etc. */
const staticExtensions =
  /\.(svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot|map)(\?.*)?$/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  if (staticExtensions.test(pathname)) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Ignorar paths internos (_next)
    '/((?!_next).*)',
  ],
};
