import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'

import addLanguages from './languages'
import addWordBanks from './wordBanks'
import addWords from './words'

export default async function main() {
  try {
    await Promise.all(
      [addLanguages].map(
        async (fn) => await fn(db, logger)
      )
    )
    await Promise.all(
      [addWordBanks].map(
        async (fn) => await fn(db, logger)
      )
    )
    await Promise.all(
      [addWords].map(
        async (fn) => await fn(db, logger)
      )
    )
  } catch (err) {
    logger.error(err)
    db.$disconnect()
    process.exit(1)
  }
}

