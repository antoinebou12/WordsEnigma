import { PrismaClient } from '@prisma/client';
import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'

import { Languages } from 'languages/languages'
import { WordsFR } from 'words/fr'

const prisma = new PrismaClient()

export default async () => {
  try {
    Promise.all(
      Languages.map(async (language) => {
        const newLanguage = await db.language.create({
          data: { name: language.name, code: language.code },
        })

        logger.debug({ data: language }, 'Added language')
      })
    )
  } catch (error) {
    console.error(error)
    logger.error(error)
  }
}
