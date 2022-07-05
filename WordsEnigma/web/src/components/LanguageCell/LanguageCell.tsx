import type { FindLanguageQuery, FindLanguageQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindLanguageQuery($id: Int!) {
    language: language(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLanguageQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  language,
}: CellSuccessProps<FindLanguageQuery, FindLanguageQueryVariables>) => {
  return <div>{JSON.stringify(language)}</div>
}
