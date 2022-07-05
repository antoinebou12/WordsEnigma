import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StatisticsCreateArgs>({
  statistics: {
    one: {
      data: {
        updatedAt: '2022-07-05T17:41:22Z',
        user: {
          create: {
            username: 'String6558777',
            email: 'String2627127',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T17:41:22Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-07-05T17:41:22Z',
        user: {
          create: {
            username: 'String2150251',
            email: 'String1074552',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T17:41:22Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
