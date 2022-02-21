import { NextResponse } from 'next/server';
import type {
  NextRequest,
  NextFetchEvent,
} from 'next/server';

export function middleware({ nextUrl }: NextRequest, event: NextFetchEvent) {
  const absoluteUrl = nextUrl.clone();

  // Устанавливаем путь
  absoluteUrl.pathname = '/signin';

  // Перенаправляем на страницу входа
  return NextResponse.redirect(absoluteUrl, 302);
}
