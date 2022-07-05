import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        username: 'String301130',
        email: 'String4312733',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2022-07-05T19:59:25Z',
      },
    })

    expect(result.username).toEqual('String301130')
    expect(result.email).toEqual('String4312733')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
    expect(result.updatedAt).toEqual('2022-07-05T19:59:25Z')
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { username: 'String8922502' },
    })

    expect(result.username).toEqual('String8922502')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
