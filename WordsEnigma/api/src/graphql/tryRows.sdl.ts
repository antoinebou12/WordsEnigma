export const schema = gql`
  type TryRow {
    id: Int!
    game: Game!
    gameId: Int!
    tries: Int!
    rowSize: Int!
    correct: Boolean!
    letters: [Letter]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    tryRows: [TryRow!]! @requireAuth
    tryRow(id: Int!): TryRow @requireAuth
  }

  input CreateTryRowInput {
    gameId: Int!
    tries: Int!
    rowSize: Int!
    correct: Boolean!
  }

  input UpdateTryRowInput {
    gameId: Int
    tries: Int
    rowSize: Int
    correct: Boolean
  }

  type Mutation {
    createTryRow(input: CreateTryRowInput!): TryRow! @requireAuth
    updateTryRow(id: Int!, input: UpdateTryRowInput!): TryRow! @requireAuth
    deleteTryRow(id: Int!): TryRow! @requireAuth
  }
`
