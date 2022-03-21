import crypto from 'crypto';

const key = 'PoG+Ce6UvNg805KG6eic+vuwZ5ahPwIhk50fQGvzHjM=';
const res = {
  success: true,
  denied: false,
};

export function tokenSign(body: BodyType = {}) {
  const head: HeadType = {
    alg: 'HS256',
    typ: 'JWT',
  };

  if (!body.exp) body.exp = Date.now() + 86400 * 30;
  if (!body.iat) body.iat = Date.now();

  const encodedHead = Buffer.from(JSON.stringify(head)).toString('base64url');
  const encodedBody = Buffer.from(JSON.stringify(body)).toString('base64url');

  const encodedSign = crypto.createHmac('sha256', 'key')
    .update(`${encodedHead}.${encodedBody}`)
    .digest('base64url');

  return [
    encodedHead,
    encodedBody,
    encodedSign,
  ].join('.');
}

export function tokenVerify(token: string) {
  if (!token.includes('.')) {
    return res.denied;
  }

  const [
    tokenHead,
    tokenBody,
    tokenSign,
  ] = token.split('.');

  if (!tokenSign) {
    return res.denied;
  }

  const decodedHead = Buffer.from(tokenHead, 'base64url').toString('utf8');
  const decodedBody = Buffer.from(tokenBody, 'base64url').toString('utf8');

  const head: HeadType = JSON.parse(decodedHead);
  const body: BodyType = JSON.parse(decodedBody);

  if (!body.exp) {
    return res.denied;
  }

  if (body.exp < Date.now()) {
    return res.denied;
  }

  if (head.alg === 'HS256') {
    const encodedSign = crypto.createHmac('sha256', key)
      .update(`${tokenHead}.${tokenBody}`)
      .digest('base64url');

    if (tokenSign === encodedSign) {
      return res.success;
    }
  }

  return res.denied;
}

type HeadType = {
  alg?: string;
  typ?: 'JWT';
};

type BodyType = {
  /**
   * 'iss' (Issuer) Claim
   */
  iss?: string;
  /**
   * 'sub' (Subject) Claim
   */
  sub?: string;
  /**
   * 'aud' (Audience) Claim
   */
  aud?: string;
  /**
   * 'exp' (Expiration Time) Claim
   */
  exp?: number;
  /**
   * 'nbf' (Not Before) Claim
   */
  nbf?: string;
  /**
   * 'iat' (Issued At) Claim
   */
  iat?: number;
  /**
   * 'jti' (JWT ID) Claim
   */
  jti?: string;
};
