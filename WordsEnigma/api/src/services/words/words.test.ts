import { words, word, createWord, updateWord, deleteWord } from './words'
import type { StandardScenario } from './words.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('words', () => {
  scenario('returns all words', async (scenario: StandardScenario) => {
    const result = await words()

    expect(result.length).toEqual(Object.keys(scenario.word).length)
  })

  scenario('returns a single word', async (scenario: StandardScenario) => {
    const result = await word({ id: scenario.word.one.id })

    expect(result).toEqual(scenario.word.one)
  })

  scenario('creates a word', async (scenario: StandardScenario) => {
    const result = await createWord({
      input: {
        word: 'String7790448',
        size: 3534283,
        languageId: scenario.word.two.languageId,
        updatedAt: '2022-07-05T19:28:22Z',
      },
    })

    expect(result.word).toEqual('String7790448')
    expect(result.size).toEqual(3534283)
    expect(result.languageId).toEqual(scenario.word.two.languageId)
    expect(result.updatedAt).toEqual('2022-07-05T19:28:22Z')
  })

  scenario('updates a word', async (scenario: StandardScenario) => {
    const original = await word({ id: scenario.word.one.id })
    const result = await updateWord({
      id: original.id,
      input: { word: 'String22445102' },
    })

    expect(result.word).toEqual('String22445102')
  })

  scenario('deletes a word', async (scenario: StandardScenario) => {
    const original = await deleteWord({ id: scenario.word.one.id })
    const result = await word({ id: original.id })

    expect(result).toEqual(null)
  })
})
