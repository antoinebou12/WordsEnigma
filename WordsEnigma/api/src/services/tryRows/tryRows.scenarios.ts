import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TryRowCreateArgs>({
  tryRow: {
    one: {
      data: {
        correct: true,
        updatedAt: '2022-07-05T17:40:26Z',
        game: {
          create: {
            name: 'String',
            startedAt: '2022-07-05T17:40:26Z',
            correct: true,
            duration: 5557444,
            updatedAt: '2022-07-05T17:40:26Z',
            user: {
              create: {
                username: 'String8096024',
                email: 'String3533030',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2022-07-05T17:40:26Z',
              },
            },
            word: {
              create: {
                word: 'String2036713',
                size: 449132,
                updatedAt: '2022-07-05T17:40:26Z',
                language: {
                  create: {
                    name: 'String',
                    code: 'String9613694',
                    updatedAt: '2022-07-05T17:40:26Z',
                  },
                },
              },
            },
            wordsBank: {
              create: {
                name: 'String5516671',
                updatedAt: '2022-07-05T17:40:26Z',
                language: {
                  create: {
                    name: 'String',
                    code: 'String9507010',
                    updatedAt: '2022-07-05T17:40:26Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        correct: true,
        updatedAt: '2022-07-05T17:40:26Z',
        game: {
          create: {
            name: 'String',
            startedAt: '2022-07-05T17:40:26Z',
            correct: true,
            duration: 5236855,
            updatedAt: '2022-07-05T17:40:26Z',
            user: {
              create: {
                username: 'String7456056',
                email: 'String2130149',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2022-07-05T17:40:26Z',
              },
            },
            word: {
              create: {
                word: 'String7339329',
                size: 7048760,
                updatedAt: '2022-07-05T17:40:26Z',
                language: {
                  create: {
                    name: 'String',
                    code: 'String2377136',
                    updatedAt: '2022-07-05T17:40:26Z',
                  },
                },
              },
            },
            wordsBank: {
              create: {
                name: 'String1147008',
                updatedAt: '2022-07-05T17:40:26Z',
                language: {
                  create: {
                    name: 'String',
                    code: 'String2745470',
                    updatedAt: '2022-07-05T17:40:26Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
