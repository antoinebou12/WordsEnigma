import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WordsBankForm from 'src/components/WordsBank/WordsBankForm'

const CREATE_WORDS_BANK_MUTATION = gql`
  mutation CreateWordsBankMutation($input: CreateWordsBankInput!) {
    createWordsBank(input: $input) {
      id
    }
  }
`

const NewWordsBank = () => {
  const [createWordsBank, { loading, error }] = useMutation(CREATE_WORDS_BANK_MUTATION, {
    onCompleted: () => {
      toast.success('WordsBank created')
      navigate(routes.wordsBanks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { languageId: parseInt(input.languageId), })
    createWordsBank({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WordsBank</h2>
      </header>
      <div className="rw-segment-main">
        <WordsBankForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWordsBank
