import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  UserSettingsResolvers,
} from 'types/graphql'

export const userSettingses: QueryResolvers['userSettingses'] = () => {
  return db.userSettings.findMany()
}

export const userSettings: QueryResolvers['userSettings'] = ({ id }) => {
  return db.userSettings.findUnique({
    where: { id },
  })
}

export const createUserSettings: MutationResolvers['createUserSettings'] = ({
  input,
}) => {
  return db.userSettings.create({
    data: input,
  })
}

export const updateUserSettings: MutationResolvers['updateUserSettings'] = ({
  id,
  input,
}) => {
  return db.userSettings.update({
    data: input,
    where: { id },
  })
}

export const deleteUserSettings: MutationResolvers['deleteUserSettings'] = ({
  id,
}) => {
  return db.userSettings.delete({
    where: { id },
  })
}

export const UserSettings: UserSettingsResolvers = {
  user: (_obj, { root }) =>
    db.userSettings.findUnique({ where: { id: root.id } }).user(),
  language: (_obj, { root }) =>
    db.userSettings.findUnique({ where: { id: root.id } }).language(),
}
