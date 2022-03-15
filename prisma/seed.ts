import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create(
    {
      data: {
        email: 'user@example.com',
        username: 'user',
        password: '1234',
        role: 'ADMIN',
      },
    }
  );
}

// Запускаем скрипт
seed();
