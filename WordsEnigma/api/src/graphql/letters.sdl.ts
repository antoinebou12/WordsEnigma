export const schema = gql`
  type Letter {
    id: Int!
    letter: String!
    tryRow: TryRow!
    tryRowId: Int!
    createdAt: DateTime!
    modifiedAt: DateTime!
  }

  type Query {
    letters: [Letter!]! @requireAuth
    letter(id: Int!): Letter @requireAuth
  }

  input CreateLetterInput {
    letter: String!
    tryRowId: Int!
    modifiedAt: DateTime!
  }

  input UpdateLetterInput {
    letter: String
    tryRowId: Int
    modifiedAt: DateTime
  }

  type Mutation {
    createLetter(input: CreateLetterInput!): Letter! @requireAuth
    updateLetter(id: Int!, input: UpdateLetterInput!): Letter! @requireAuth
    deleteLetter(id: Int!): Letter! @requireAuth
  }
`
