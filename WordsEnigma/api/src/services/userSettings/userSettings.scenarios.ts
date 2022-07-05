import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserSettingsCreateArgs>({
  userSettings: {
    one: {
      data: {
        updatedAt: '2022-07-05T17:39:20Z',
        user: {
          create: {
            username: 'String4061108',
            email: 'String1704477',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T17:39:20Z',
          },
        },
        language: {
          create: {
            name: 'String',
            code: 'String3314127',
            updatedAt: '2022-07-05T17:39:20Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-07-05T17:39:20Z',
        user: {
          create: {
            username: 'String8350507',
            email: 'String4122525',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-05T17:39:20Z',
          },
        },
        language: {
          create: {
            name: 'String',
            code: 'String1505338',
            updatedAt: '2022-07-05T17:39:20Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
