import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordsBankCreateArgs>({
  wordsBank: {
    one: {
      data: {
        source: 'String',
        language: {
          create: {
            name: 'String',
            code: 'String',
            createdAt: '2022-06-29T14:21:48Z',
          },
        },
      },
    },
    two: {
      data: {
        source: 'String',
        language: {
          create: {
            name: 'String',
            code: 'String',
            createdAt: '2022-06-29T14:21:48Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
