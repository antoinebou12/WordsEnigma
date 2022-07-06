export const schema = gql`
  type Word {
    id: Int!
    word: String!
    definition: String
    example: String
    language: Language!
    languageId: Int!
    createdAt: DateTime!
    WordsBank: WordsBank
    wordsBankId: Int
    Game: [Game]!
  }

  type Query {
    words: [Word!]! @requireAuth
    word(id: Int!): Word @requireAuth
  }

  input CreateWordInput {
    word: String!
    definition: String
    example: String
    languageId: Int!
    wordsBankId: Int
  }

  input UpdateWordInput {
    word: String
    definition: String
    example: String
    languageId: Int
    wordsBankId: Int
  }

  type Mutation {
    createWord(input: CreateWordInput!): Word! @requireAuth
    updateWord(id: Int!, input: UpdateWordInput!): Word! @requireAuth
    deleteWord(id: Int!): Word! @requireAuth
  }
`
