import * as jose from 'jose';
import type {
  JWTPayload,
} from 'jose';

const key = process.env.SECRET_KEY;
const res = {
  success: true,
  denied: false,
};

export async function tokenSign(payload: JWTPayload = {}) {
  if (!payload.exp) payload.exp = Date.now() + 86400 * 30;
  if (!payload.iat) payload.iat = Date.now();

  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode(key));
}

export async function tokenVerify(token: string) {
  try {
    await jose.jwtVerify(token, new TextEncoder().encode(key));

    return res.success;
  } catch {
    return res.denied;
  }
}
