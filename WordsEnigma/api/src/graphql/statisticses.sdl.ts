export const schema = gql`
  type Statistics {
    id: Int!
    gamePlayed: Int!
    gameWon: Int!
    gameLost: Int!
    streak: Int!
    average: Int!
    user: User!
    Game: [Game]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    statisticses: [Statistics!]! @requireAuth
    statistics(id: Int!): Statistics @requireAuth
  }

  input CreateStatisticsInput {
    gamePlayed: Int!
    gameWon: Int!
    gameLost: Int!
    streak: Int!
    average: Int!
  }

  input UpdateStatisticsInput {
    gamePlayed: Int
    gameWon: Int
    gameLost: Int
    streak: Int
    average: Int
  }

  type Mutation {
    createStatistics(input: CreateStatisticsInput!): Statistics! @requireAuth
    updateStatistics(id: Int!, input: UpdateStatisticsInput!): Statistics!
      @requireAuth
    deleteStatistics(id: Int!): Statistics! @requireAuth
  }
`
