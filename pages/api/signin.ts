import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { prisma } from '@lib/prisma';
import {
  tokenSign,
  tokenVerify,
} from '@utils/token';

export default async function signin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      username,
      password,
    } = req.body;

    // Ищем пользователя с таким именем
    const user = await prisma.user.findUnique(
      {
        where: {
          username,
        }
      }
    );

    if (user) {
      if (user.password === password) {
        res.setHeader('Set-Cookie', `token=${tokenSign()}; Path=/; Max-Age=${86400 * 30}; HttpOnly`);
        res.status(200);
        res.end();
      }
    }
  }

  res.status(400);
  res.end();
}
