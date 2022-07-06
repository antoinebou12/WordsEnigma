import type { FindWordsBanks } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import WordsBanks from 'src/components/WordsBank/WordsBanks'

export const QUERY = gql`
  query FindWordsBanks {
    wordsBanks {
      id
      languageId
      source
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No wordsBanks yet. '}
      <Link
        to={routes.newWordsBank()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ wordsBanks }: CellSuccessProps<FindWordsBanks>) => {
  return <WordsBanks wordsBanks={wordsBanks} />
}
