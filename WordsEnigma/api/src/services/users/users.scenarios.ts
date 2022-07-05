import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'String4777791',
        email: 'String2720045',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2022-07-05T19:59:25Z',
      },
    },
    two: {
      data: {
        username: 'String4756834',
        email: 'String6170515',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2022-07-05T19:59:25Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
