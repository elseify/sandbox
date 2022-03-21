import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { prisma } from '@lib/prisma';

import {
  tokenSign,
  tokenVerify,
} from '@utils/token';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
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
        const token = await tokenSign();

        res.setHeader('Set-Cookie', `token=${token}; Path=/; Max-Age=${86400 * 30}; HttpOnly`);
        res.json(
          {
            login: 'success',
          }
        );
      } else {
        res.json(
          {
            login: 'denied',
          }
        );
      }
    }
  }

  res.status(400);
  res.end();
}
