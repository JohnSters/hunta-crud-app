import {PrismaClient} from '@prisma/client';

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "Development") {
  global.prisma = prisma
}

export {prisma}