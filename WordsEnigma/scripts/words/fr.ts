import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';
import getDefinition from './dictionnaryCrawler';
import { WordsFR } from '../data/fr';

const languageCode = 'fr'

export async function addWords(db: PrismaClient, logger: Logger) {
    for (const word of WordsFR) {
        try {
            const value: Object = await getDefinition(languageCode, word);
            db.word.upsert({
                where: {
                    word: word,
                },
                update: {},
                create: {
                    word: word,
                    definition: value["definition"],
                    size: word.length,
                    source: value["source"],
                    Language: {
                        connect: {
                            code: languageCode,
                        },
                    },
                    WordBank: {
                        connect: {
                            name: languageCode
                        }
                    }
                },
            });
        } catch (error) {
            logger.error(error)
        };
    }

}