import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'String629227',
        email: 'String270515',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2022-07-05T17:40:03Z',
      },
    },
    two: {
      data: {
        username: 'String7819566',
        email: 'String6483156',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2022-07-05T17:40:03Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
