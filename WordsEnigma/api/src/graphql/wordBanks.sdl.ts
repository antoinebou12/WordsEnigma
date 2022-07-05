export const schema = gql`
  type WordBank {
    id: Int!
    name: String!
    words: [Word]!
    language: Language!
    languageId: Int!
    source: String
    Game: [Game]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    wordBanks: [WordBank!]! @requireAuth
    wordBank(id: Int!): WordBank @requireAuth
  }

  input CreateWordBankInput {
    name: String!
    languageId: Int!
    source: String
  }

  input UpdateWordBankInput {
    name: String
    languageId: Int
    source: String
  }

  type Mutation {
    createWordBank(input: CreateWordBankInput!): WordBank! @requireAuth
    updateWordBank(id: Int!, input: UpdateWordBankInput!): WordBank!
      @requireAuth
    deleteWordBank(id: Int!): WordBank! @requireAuth
  }
`
