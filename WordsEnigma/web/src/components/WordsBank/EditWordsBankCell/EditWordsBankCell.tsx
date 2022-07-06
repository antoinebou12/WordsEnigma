import type { EditWordsBankById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WordsBankForm from 'src/components/WordsBank/WordsBankForm'

export const QUERY = gql`
  query EditWordsBankById($id: Int!) {
    wordsBank: wordsBank(id: $id) {
      id
      languageId
      source
    }
  }
`
const UPDATE_WORDS_BANK_MUTATION = gql`
  mutation UpdateWordsBankMutation($id: Int!, $input: UpdateWordsBankInput!) {
    updateWordsBank(id: $id, input: $input) {
      id
      languageId
      source
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ wordsBank }: CellSuccessProps<EditWordsBankById>) => {
  const [updateWordsBank, { loading, error }] = useMutation(UPDATE_WORDS_BANK_MUTATION, {
    onCompleted: () => {
      toast.success('WordsBank updated')
      navigate(routes.wordsBanks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { languageId: parseInt(input.languageId), })
    updateWordsBank({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit WordsBank {wordsBank.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WordsBankForm wordsBank={wordsBank} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
