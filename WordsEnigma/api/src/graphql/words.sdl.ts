export const schema = gql`
  type Word {
    id: Int!
    word: String!
    definition: String
    example: String
    synonym: String
    size: Int!
    source: String
    language: Language!
    languageId: Int!
    wordBanks: [WordBank]!
    Game: [Game]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    words: [Word!]! @requireAuth
    word(id: Int!): Word @requireAuth
  }

  input CreateWordInput {
    word: String!
    definition: String
    example: String
    synonym: String
    size: Int!
    source: String
    languageId: Int!
  }

  input UpdateWordInput {
    word: String
    definition: String
    example: String
    synonym: String
    size: Int
    source: String
    languageId: Int
  }

  type Mutation {
    createWord(input: CreateWordInput!): Word! @requireAuth
    updateWord(id: Int!, input: UpdateWordInput!): Word! @requireAuth
    deleteWord(id: Int!): Word! @requireAuth
  }
`
