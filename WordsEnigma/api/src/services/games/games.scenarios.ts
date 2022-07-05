import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GameCreateArgs>({
  game: {
    one: {
      data: {
        name: 'String',
        startedAt: '2022-07-05T17:40:15Z',
        correct: true,
        duration: 8622466,
        updatedAt: '2022-07-05T17:40:15Z',
        user: {
          create: {
            username: 'String3787824',
            email: 'String333550',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T17:40:15Z',
          },
        },
        word: {
          create: {
            word: 'String3685133',
            size: 6308379,
            updatedAt: '2022-07-05T17:40:15Z',
            language: {
              create: {
                name: 'String',
                code: 'String9872786',
                updatedAt: '2022-07-05T17:40:15Z',
              },
            },
          },
        },
        wordsBank: {
          create: {
            name: 'String8107323',
            updatedAt: '2022-07-05T17:40:15Z',
            language: {
              create: {
                name: 'String',
                code: 'String3205724',
                updatedAt: '2022-07-05T17:40:15Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startedAt: '2022-07-05T17:40:15Z',
        correct: true,
        duration: 4086157,
        updatedAt: '2022-07-05T17:40:15Z',
        user: {
          create: {
            username: 'String4710194',
            email: 'String4769565',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T17:40:15Z',
          },
        },
        word: {
          create: {
            word: 'String1191874',
            size: 1054057,
            updatedAt: '2022-07-05T17:40:15Z',
            language: {
              create: {
                name: 'String',
                code: 'String9831033',
                updatedAt: '2022-07-05T17:40:15Z',
              },
            },
          },
        },
        wordsBank: {
          create: {
            name: 'String6389881',
            updatedAt: '2022-07-05T17:40:15Z',
            language: {
              create: {
                name: 'String',
                code: 'String416693',
                updatedAt: '2022-07-05T17:40:15Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
