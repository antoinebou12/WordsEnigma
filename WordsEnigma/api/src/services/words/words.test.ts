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
        word: 'String',
        languageId: scenario.word.two.languageId,
        createdAt: '2022-06-29T14:20:54Z',
      },
    })

    expect(result.word).toEqual('String')
    expect(result.languageId).toEqual(scenario.word.two.languageId)
    expect(result.createdAt).toEqual('2022-06-29T14:20:54Z')
  })

  scenario('updates a word', async (scenario: StandardScenario) => {
    const original = await word({ id: scenario.word.one.id })
    const result = await updateWord({
      id: original.id,
      input: { word: 'String2' },
    })

    expect(result.word).toEqual('String2')
  })

  scenario('deletes a word', async (scenario: StandardScenario) => {
    const original = await deleteWord({ id: scenario.word.one.id })
    const result = await word({ id: original.id })

    expect(result).toEqual(null)
  })
})
