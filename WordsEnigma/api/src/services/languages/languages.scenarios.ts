import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LanguageCreateArgs>({
  language: {
    one: {
      data: {
        name: 'String',
        code: 'String1573881',
        updatedAt: '2022-07-05T17:39:28Z',
      },
    },
    two: {
      data: {
        name: 'String',
        code: 'String8244439',
        updatedAt: '2022-07-05T17:39:28Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
