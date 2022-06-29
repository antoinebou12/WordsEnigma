export const schema = gql`
  type WordsBank {
    id: Int!
    words: [Word]!
    language: Language!
    languageId: Int!
    source: String!
    Game: [Game]!
  }

  type Query {
    wordsBanks: [WordsBank!]! @requireAuth
    wordsBank(id: Int!): WordsBank @requireAuth
  }

  input CreateWordsBankInput {
    languageId: Int!
    source: String!
  }

  input UpdateWordsBankInput {
    languageId: Int
    source: String
  }

  type Mutation {
    createWordsBank(input: CreateWordsBankInput!): WordsBank! @requireAuth
    updateWordsBank(id: Int!, input: UpdateWordsBankInput!): WordsBank!
      @requireAuth
    deleteWordsBank(id: Int!): WordsBank! @requireAuth
  }
`
