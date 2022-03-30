import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
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

  await prisma.user.create(
    {
      data: {
        email: 'user@email.com',
        username: 'user',
        password: '1234',
        role: 'ADMIN',
        chunks: {
          createMany: {
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
          },
        },
      },
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

  await prisma.chunk.update(
    {
      where: {
        id: 2
      },
      data: {
        tags: {
          connect: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        },
      },
    }
  );

  await prisma.chunk.update(
    {
      where: {
        id: 3
      },
      data: {
        tags: {
          connect: {
            id: 3,
          },
        },
      },
    }
  );
}

// Запускаем скрипт
seed();
