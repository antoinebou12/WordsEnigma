import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  WordResolvers,
} from 'types/graphql'

export const words: QueryResolvers['words'] = () => {
  return db.word.findMany()
}

export const word: QueryResolvers['word'] = ({ id }) => {
  return db.word.findUnique({
    where: { id },
  })
}

export const createWord: MutationResolvers['createWord'] = ({ input }) => {
  return db.word.create({
    data: input,
  })
}

export const updateWord: MutationResolvers['updateWord'] = ({ id, input }) => {
  return db.word.update({
    data: input,
    where: { id },
  })
}

export const deleteWord: MutationResolvers['deleteWord'] = ({ id }) => {
  return db.word.delete({
    where: { id },
  })
}

export const Word: WordResolvers = {
  language: (_obj, { root }) =>
    db.word.findUnique({ where: { id: root.id } }).language(),
  wordBanks: (_obj, { root }) =>
    db.word.findUnique({ where: { id: root.id } }).wordBanks(),
  Game: (_obj, { root }) =>
    db.word.findUnique({ where: { id: root.id } }).Game(),
}
