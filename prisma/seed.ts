import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create(
    {
      data: {
        email: 'user@email.com',
        username: 'user',
        password: '1234',
        role: 'ADMIN',
      },
    }
  );

  await prisma.chunk.createMany(
    {
      data: [
        {
          image: 'image.png',
          blocks: [
            {
              type: 'Header',
              data: 'Название',
            },
          ],
        },
        {
          image: 'image.png',
          blocks: [
            {
              type: 'Header',
              data: 'Название',
            },
          ],
        },
        {
          image: 'image.png',
          blocks: [
            {
              type: 'Header',
              data: 'Название',
            },
          ],
        },
        {
          image: 'image.png',
          blocks: [
            {
              type: 'Header',
              data: 'Название',
            },
          ],
        },
      ],
    }
  );

  await prisma.tag.createMany(
    {
      data: [
        {
          name: 'Тег',
        },
        {
          name: 'Тег 2',
        },
        {
          name: 'Тег 3',
        },
        {
          name: 'Тег 4',
        },
      ],
    }
  );

  await prisma.chunk.update(
    {
      where: {
        id: 1
      },
      data: {
        tags: {
          connect: {
            id: 1,
          },
        },
      },
    }
  );

  for (let chunk of await prisma.chunk.findMany()) {
    await prisma.chunk.update(
      {
        where: {
          id: chunk.id,
        },
        data: {
          user: {
            connect: {
              id: 1,
            },
          },
          tags: {
            connect: {
              id: chunk.id < 3 ? 1 : 2,
            }
          },
        }
      }
    )
  }
}

seed();
