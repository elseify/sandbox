import { PrismaClient } from '@prisma/client';

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV.includes('dev')) {
  global.prisma = prisma;
} else {
  global.prisma = undefined;
}

declare global {
  var prisma: PrismaClient | undefined;
}

export {
  prisma,
};
