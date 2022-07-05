import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GameCreateArgs>({
  game: {
    one: {
      data: {
        name: 'String',
        startedAt: '2022-07-05T19:28:06Z',
        correct: true,
        duration: 6773385,
        updatedAt: '2022-07-05T19:28:06Z',
        user: {
          create: {
            username: 'String1218908',
            email: 'String6112421',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T19:28:06Z',
          },
        },
        word: {
          create: {
            word: 'String757974',
            size: 7326784,
            updatedAt: '2022-07-05T19:28:06Z',
            language: {
              create: {
                name: 'String',
                code: 'String7888349',
                updatedAt: '2022-07-05T19:28:06Z',
              },
            },
          },
        },
        wordsBank: {
          create: {
            name: 'String6109382',
            updatedAt: '2022-07-05T19:28:06Z',
            language: {
              create: {
                name: 'String',
                code: 'String1095364',
                updatedAt: '2022-07-05T19:28:06Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startedAt: '2022-07-05T19:28:06Z',
        correct: true,
        duration: 5642450,
        updatedAt: '2022-07-05T19:28:06Z',
        user: {
          create: {
            username: 'String4076403',
            email: 'String417948',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T19:28:06Z',
          },
        },
        word: {
          create: {
            word: 'String1546076',
            size: 8127412,
            updatedAt: '2022-07-05T19:28:06Z',
            language: {
              create: {
                name: 'String',
                code: 'String8183976',
                updatedAt: '2022-07-05T19:28:06Z',
              },
            },
          },
        },
        wordsBank: {
          create: {
            name: 'String5365446',
            updatedAt: '2022-07-05T19:28:06Z',
            language: {
              create: {
                name: 'String',
                code: 'String6005656',
                updatedAt: '2022-07-05T19:28:06Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
