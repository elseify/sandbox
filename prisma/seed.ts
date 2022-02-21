import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function seed() {
  await prisma.user.create(
    {
      data: {
        email: 'user@email.com',
        username: 'User',
        password: '1234',
        role: 'ADMIN',
      },
    }
  );
}

// Запускаем скрипт
seed();
