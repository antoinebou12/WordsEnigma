export const schema = gql`
  type Game {
    id: Int!
    name: String!
    tries: Int!
    startedAt: DateTime!
    finishedAt: DateTime
    correct: Boolean!
    duration: Int!
    user: User!
    userId: Int!
    word: Word!
    wordId: Int!
    wordsBank: WordBank!
    wordsBankId: Int!
    tryRows: [TryRow]!
    statistics: Statistics
    statisticsId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    games: [Game!]! @requireAuth
    game(id: Int!): Game @requireAuth
  }

  input CreateGameInput {
    name: String!
    tries: Int!
    startedAt: DateTime!
    finishedAt: DateTime
    correct: Boolean!
    duration: Int!
    userId: Int!
    wordId: Int!
    wordsBankId: Int!
    statisticsId: Int!
  }

  input UpdateGameInput {
    name: String
    tries: Int
    startedAt: DateTime
    finishedAt: DateTime
    correct: Boolean
    duration: Int
    userId: Int
    wordId: Int
    wordsBankId: Int
    statisticsId: Int
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game! @requireAuth
    updateGame(id: Int!, input: UpdateGameInput!): Game! @requireAuth
    deleteGame(id: Int!): Game! @requireAuth
  }
`
