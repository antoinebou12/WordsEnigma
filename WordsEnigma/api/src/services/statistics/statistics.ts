import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  StatisticsResolvers,
} from 'types/graphql'

export const statisticses: QueryResolvers['statisticses'] = () => {
  return db.statistics.findMany()
}

export const statistics: QueryResolvers['statistics'] = ({ id }) => {
  return db.statistics.findUnique({
    where: { id },
  })
}

export const createStatistics: MutationResolvers['createStatistics'] = ({
  input,
}) => {
  return db.statistics.create({
    data: input,
  })
}

export const updateStatistics: MutationResolvers['updateStatistics'] = ({
  id,
  input,
}) => {
  return db.statistics.update({
    data: input,
    where: { id },
  })
}

export const deleteStatistics: MutationResolvers['deleteStatistics'] = ({
  id,
}) => {
  return db.statistics.delete({
    where: { id },
  })
}

export const Statistics: StatisticsResolvers = {
  user: (_obj, { root }) =>
    db.statistics.findUnique({ where: { id: root.id } }).user(),
  Game: (_obj, { root }) =>
    db.statistics.findUnique({ where: { id: root.id } }).Game(),
}
