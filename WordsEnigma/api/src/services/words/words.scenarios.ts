import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordCreateArgs>({
  word: {
    one: {
      data: {
        word: 'String',
        createdAt: '2022-06-29T14:20:54Z',
        language: {
          create: {
            name: 'String',
            code: 'String',
            createdAt: '2022-06-29T14:20:54Z',
          },
        },
      },
    },
    two: {
      data: {
        word: 'String',
        createdAt: '2022-06-29T14:20:54Z',
        language: {
          create: {
            name: 'String',
            code: 'String',
            createdAt: '2022-06-29T14:20:54Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
