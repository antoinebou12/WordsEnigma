import { PrismaClient } from '@prisma/client';
import { Logger } from 'pino';
import { CryptoJS } from 'crypto-js';

export async function addUsers(prisma: PrismaClient, logger: Logger) {
    for (const user of Users) {
        const salt = CryptoJS.lib.WordArray.random(128 / 8).toString()
        const hashedPassword = CryptoJS.PBKDF2(user.password, salt, { keySize: 256 / 32 }).toString()
        await prisma.user.upsert(
            {
                where: {
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    roles: user.roles,
                    password: hashedPassword,
                },
                update: {},
                create: {
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
            });
        logger.debug({ data: language }, 'Added language')
    }
}


export const Users = [
    {
        username: 'admin',
        name: 'Admin',
        email: '',
        password: 'admin',
        roles: ['admin']
    },
    {
        username: 'user',
        name: 'User',
        email: '',
        password: 'user',
    }
]