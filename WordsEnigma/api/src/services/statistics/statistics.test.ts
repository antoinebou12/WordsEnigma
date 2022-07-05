import {
  statisticses,
  statistics,
  createStatistics,
  updateStatistics,
  deleteStatistics,
} from './statistics'
import type { StandardScenario } from './statistics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('statisticses', () => {
  scenario('returns all statisticses', async (scenario: StandardScenario) => {
    const result = await statisticses()

    expect(result.length).toEqual(Object.keys(scenario.statistics).length)
  })

  scenario(
    'returns a single statistics',
    async (scenario: StandardScenario) => {
      const result = await statistics({ id: scenario.statistics.one.id })

      expect(result).toEqual(scenario.statistics.one)
    }
  )

  scenario('creates a statistics', async () => {
    const result = await createStatistics({
      input: { updatedAt: '2022-07-05T17:41:22Z' },
    })

    expect(result.updatedAt).toEqual('2022-07-05T17:41:22Z')
  })

  scenario('updates a statistics', async (scenario: StandardScenario) => {
    const original = await statistics({ id: scenario.statistics.one.id })
    const result = await updateStatistics({
      id: original.id,
      input: { updatedAt: '2022-07-06T17:41:22Z' },
    })

    expect(result.updatedAt).toEqual('2022-07-06T17:41:22Z')
  })

  scenario('deletes a statistics', async (scenario: StandardScenario) => {
    const original = await deleteStatistics({ id: scenario.statistics.one.id })
    const result = await statistics({ id: original.id })

    expect(result).toEqual(null)
  })
})
