import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordBankCreateArgs>({
  wordBank: {
    one: {
      data: {
        name: 'String4429308',
        updatedAt: '2022-07-05T17:39:51Z',
        language: {
          create: {
            name: 'String',
            code: 'String1914459',
            updatedAt: '2022-07-05T17:39:51Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String7375559',
        updatedAt: '2022-07-05T17:39:51Z',
        language: {
          create: {
            name: 'String',
            code: 'String1456948',
            updatedAt: '2022-07-05T17:39:51Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
