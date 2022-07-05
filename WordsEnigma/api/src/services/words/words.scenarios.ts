import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordCreateArgs>({
  word: {
    one: {
      data: {
        word: 'String8771622',
        size: 529191,
        updatedAt: '2022-07-05T17:39:40Z',
        language: {
          create: {
            name: 'String',
            code: 'String5058742',
            updatedAt: '2022-07-05T17:39:40Z',
          },
        },
      },
    },
    two: {
      data: {
        word: 'String1720047',
        size: 1763934,
        updatedAt: '2022-07-05T17:39:40Z',
        language: {
          create: {
            name: 'String',
            code: 'String3688681',
            updatedAt: '2022-07-05T17:39:40Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
