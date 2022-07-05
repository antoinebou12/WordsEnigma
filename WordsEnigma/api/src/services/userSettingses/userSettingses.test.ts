import {
  userSettingses,
  userSettings,
  createUserSettings,
  updateUserSettings,
  deleteUserSettings,
} from './userSettingses'
import type { StandardScenario } from './userSettingses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userSettingses', () => {
  scenario('returns all userSettingses', async (scenario: StandardScenario) => {
    const result = await userSettingses()

    expect(result.length).toEqual(Object.keys(scenario.userSettings).length)
  })

  scenario(
    'returns a single userSettings',
    async (scenario: StandardScenario) => {
      const result = await userSettings({ id: scenario.userSettings.one.id })

      expect(result).toEqual(scenario.userSettings.one)
    }
  )

  scenario('creates a userSettings', async (scenario: StandardScenario) => {
    const result = await createUserSettings({
      input: {
        userId: scenario.userSettings.two.userId,
        languageId: scenario.userSettings.two.languageId,
        updatedAt: '2022-07-05T17:39:20Z',
      },
    })

    expect(result.userId).toEqual(scenario.userSettings.two.userId)
    expect(result.languageId).toEqual(scenario.userSettings.two.languageId)
    expect(result.updatedAt).toEqual('2022-07-05T17:39:20Z')
  })

  scenario('updates a userSettings', async (scenario: StandardScenario) => {
    const original = await userSettings({ id: scenario.userSettings.one.id })
    const result = await updateUserSettings({
      id: original.id,
      input: { updatedAt: '2022-07-06T17:39:20Z' },
    })

    expect(result.updatedAt).toEqual('2022-07-06T17:39:20Z')
  })

  scenario('deletes a userSettings', async (scenario: StandardScenario) => {
    const original = await deleteUserSettings({
      id: scenario.userSettings.one.id,
    })
    const result = await userSettings({ id: original.id })

    expect(result).toEqual(null)
  })
})
