import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LanguageCreateArgs>({
  language: {
    one: {
      data: {
        name: 'String',
        code: 'String',
        createdAt: '2022-06-29T14:21:59Z',
      },
    },
    two: {
      data: {
        name: 'String',
        code: 'String',
        createdAt: '2022-06-29T14:21:59Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
