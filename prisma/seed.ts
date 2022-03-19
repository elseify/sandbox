import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.tag.createMany(
    {
      data: [
        {
          name: 'Навигация',
        },
        {
          name: 'Боковая панель',
        },
        {
          name: 'Форма',
        },
        {
          name: 'Модальное окно',
        },
      ],
    }
  );

  await prisma.user.create(
    {
      data: {
        email: 'user@example.com',
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
                    data: 'Заголовок',
                  },
                ],
              },
              {
                image: 'image.png',
                blocks: [
                  {
                    type: 'Header',
                    data: 'Заголовок',
                  },
                ],
              },
              {
                image: 'image.png',
                blocks: [
                  {
                    type: 'Header',
                    data: 'Заголовок',
                  },
                ],
              },
              {
                image: 'image.png',
                blocks: [
                  {
                    type: 'Header',
                    data: 'Заголовок',
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
