import {
  wordsBanks,
  wordsBank,
  createWordsBank,
  updateWordsBank,
  deleteWordsBank,
} from './wordsBanks'
import type { StandardScenario } from './wordsBanks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('wordsBanks', () => {
  scenario('returns all wordsBanks', async (scenario: StandardScenario) => {
    const result = await wordsBanks()

    expect(result.length).toEqual(Object.keys(scenario.wordsBank).length)
  })

  scenario('returns a single wordsBank', async (scenario: StandardScenario) => {
    const result = await wordsBank({ id: scenario.wordsBank.one.id })

    expect(result).toEqual(scenario.wordsBank.one)
  })

  scenario('creates a wordsBank', async (scenario: StandardScenario) => {
    const result = await createWordsBank({
      input: {
        languageId: scenario.wordsBank.two.languageId,
        source: 'String',
      },
    })

    expect(result.languageId).toEqual(scenario.wordsBank.two.languageId)
    expect(result.source).toEqual('String')
  })

  scenario('updates a wordsBank', async (scenario: StandardScenario) => {
    const original = await wordsBank({ id: scenario.wordsBank.one.id })
    const result = await updateWordsBank({
      id: original.id,
      input: { source: 'String2' },
    })

    expect(result.source).toEqual('String2')
  })

  scenario('deletes a wordsBank', async (scenario: StandardScenario) => {
    const original = await deleteWordsBank({ id: scenario.wordsBank.one.id })
    const result = await wordsBank({ id: original.id })

    expect(result).toEqual(null)
  })
})
