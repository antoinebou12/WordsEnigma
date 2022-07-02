import type { FindWordsBankById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WordsBank from 'src/components/WordsBank/WordsBank'

export const QUERY = gql`
  query FindWordsBankById($id: Int!) {
    wordsBank: wordsBank(id: $id) {
      id
      languageId
      source
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WordsBank not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ wordsBank }: CellSuccessProps<FindWordsBankById>) => {
  return <WordsBank wordsBank={wordsBank} />
}
