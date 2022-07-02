import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';

export async function addLanguages(prisma: PrismaClient, logger: Logger) {
    for (const language of Languages) {
        await prisma.language.upsert(
            {
                where: {
                    code: language.code,
                },
                update: {},
                create: {
                    name: language.name,
                    code: language.code,
                }
            });
        logger.debug({ data: language }, 'Added language')
    }
}

export const Languages = [
    {
        id: 1,
        name: 'English',
        code: 'en',
    },
    {
        name: 'German',
        code: 'de',
    },
    {
        name: 'French',
        code: 'fr',
    },
    {
        name: 'Spanish',
        code: 'es',
    },
    {
        name: 'Italian',
        code: 'it',
    },
    {
        name: 'Portuguese',
        code: 'pt',
    },
]