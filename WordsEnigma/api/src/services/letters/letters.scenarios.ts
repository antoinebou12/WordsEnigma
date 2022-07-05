import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LetterCreateArgs>({
  letter: {
    one: {
      data: {
        letter: 'String',
        createdAt: '2022-07-05T17:41:36Z',
        modifiedAt: '2022-07-05T17:41:36Z',
        tryRow: {
          create: {
            correct: true,
            updatedAt: '2022-07-05T17:41:36Z',
            game: {
              create: {
                name: 'String',
                startedAt: '2022-07-05T17:41:36Z',
                correct: true,
                duration: 2852307,
                updatedAt: '2022-07-05T17:41:36Z',
                user: {
                  create: {
                    username: 'String4025814',
                    email: 'String4634837',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2022-07-05T17:41:36Z',
                  },
                },
                word: {
                  create: {
                    word: 'String5476594',
                    size: 3354576,
                    updatedAt: '2022-07-05T17:41:36Z',
                    language: {
                      create: {
                        name: 'String',
                        code: 'String9547970',
                        updatedAt: '2022-07-05T17:41:36Z',
                      },
                    },
                  },
                },
                wordsBank: {
                  create: {
                    name: 'String4590127',
                    updatedAt: '2022-07-05T17:41:36Z',
                    language: {
                      create: {
                        name: 'String',
                        code: 'String6854374',
                        updatedAt: '2022-07-05T17:41:36Z',
                      },
                    },
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
        letter: 'String',
        createdAt: '2022-07-05T17:41:36Z',
        modifiedAt: '2022-07-05T17:41:36Z',
        tryRow: {
          create: {
            correct: true,
            updatedAt: '2022-07-05T17:41:36Z',
            game: {
              create: {
                name: 'String',
                startedAt: '2022-07-05T17:41:36Z',
                correct: true,
                duration: 3826594,
                updatedAt: '2022-07-05T17:41:36Z',
                user: {
                  create: {
                    username: 'String9221542',
                    email: 'String5013717',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2022-07-05T17:41:36Z',
                  },
                },
                word: {
                  create: {
                    word: 'String5952245',
                    size: 630009,
                    updatedAt: '2022-07-05T17:41:36Z',
                    language: {
                      create: {
                        name: 'String',
                        code: 'String7998454',
                        updatedAt: '2022-07-05T17:41:36Z',
                      },
                    },
                  },
                },
                wordsBank: {
                  create: {
                    name: 'String7442540',
                    updatedAt: '2022-07-05T17:41:36Z',
                    language: {
                      create: {
                        name: 'String',
                        code: 'String8964835',
                        updatedAt: '2022-07-05T17:41:36Z',
                      },
                    },
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
