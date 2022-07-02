import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

import { url } from './../dictionnaryCrawler/fr';

const languageCode = 'fr'

export async function addWordBank(db: PrismaClient, logger: Logger) {
    await db.wordBank.upsert(
        {
            where: {
                name: languageCode,
            },
            update: {},
            create: {
                name: languageCode,
                source: url,
                language: {
                    connect: {
                        code: languageCode,
                    },
                },
            }
        });
    logger.debug('Added word bank')
}