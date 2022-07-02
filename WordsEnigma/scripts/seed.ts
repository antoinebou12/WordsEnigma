import { PrismaClient } from '@prisma/client';
import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'

import addLanguages from './languages'

const prisma = new PrismaClient()

async function main() {
    await addLanguages(prisma, logger)
}


main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

