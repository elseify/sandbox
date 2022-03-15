import { NextResponse } from 'next/server';
import type {
  NextRequest,
  NextFetchEvent,
} from 'next/server';

import {
  tokenSign,
  tokenVerify,
} from '@utils/token';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const {
    cookies,
    nextUrl,
  } = req;

  const isValid = await tokenVerify(cookies.token);

  if (!isValid) {
    const absoluteUrl = nextUrl.clone();

    absoluteUrl.pathname = '/login';

    return NextResponse.redirect(absoluteUrl, 302);
  }

  return NextResponse.next();
}
