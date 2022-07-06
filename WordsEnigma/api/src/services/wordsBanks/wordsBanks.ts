import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  WordsBankResolvers,
} from 'types/graphql'

export const wordsBanks: QueryResolvers['wordsBanks'] = () => {
  return db.wordsBank.findMany()
}

export const wordsBank: QueryResolvers['wordsBank'] = ({ id }) => {
  return db.wordsBank.findUnique({
    where: { id },
  })
}

export const createWordsBank: MutationResolvers['createWordsBank'] = ({
  input,
}) => {
  return db.wordsBank.create({
    data: input,
  })
}

export const updateWordsBank: MutationResolvers['updateWordsBank'] = ({
  id,
  input,
}) => {
  return db.wordsBank.update({
    data: input,
    where: { id },
  })
}

export const deleteWordsBank: MutationResolvers['deleteWordsBank'] = ({
  id,
}) => {
  return db.wordsBank.delete({
    where: { id },
  })
}

export const WordsBank: WordsBankResolvers = {
  words: (_obj, { root }) =>
    db.wordsBank.findUnique({ where: { id: root.id } }).words(),
  language: (_obj, { root }) =>
    db.wordsBank.findUnique({ where: { id: root.id } }).language(),
  Game: (_obj, { root }) =>
    db.wordsBank.findUnique({ where: { id: root.id } }).Game(),
}
