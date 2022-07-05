import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WordCreateArgs>({
  word: {
    one: {
      data: {
        word: 'String7022169',
        size: 372854,
        updatedAt: '2022-07-05T19:28:22Z',
        language: {
          create: {
            name: 'String',
            code: 'String3927704',
            updatedAt: '2022-07-05T19:28:22Z',
          },
        },
      },
    },
    two: {
      data: {
        word: 'String2287195',
        size: 6522672,
        updatedAt: '2022-07-05T19:28:22Z',
        language: {
          create: {
            name: 'String',
            code: 'String5587181',
            updatedAt: '2022-07-05T19:28:22Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
