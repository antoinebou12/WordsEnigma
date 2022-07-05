export const schema = gql`
  type UserSettings {
    id: Int!
    bio: String
    user: User!
    userId: Int!
    language: Language!
    languageId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    userSettingses: [UserSettings!]! @requireAuth
    userSettings(id: Int!): UserSettings @requireAuth
  }

  input CreateUserSettingsInput {
    bio: String
    userId: Int!
    languageId: Int!
  }

  input UpdateUserSettingsInput {
    bio: String
    userId: Int
    languageId: Int
  }

  type Mutation {
    createUserSettings(input: CreateUserSettingsInput!): UserSettings!
      @requireAuth
    updateUserSettings(
      id: Int!
      input: UpdateUserSettingsInput!
    ): UserSettings! @requireAuth
    deleteUserSettings(id: Int!): UserSettings! @requireAuth
  }
`
