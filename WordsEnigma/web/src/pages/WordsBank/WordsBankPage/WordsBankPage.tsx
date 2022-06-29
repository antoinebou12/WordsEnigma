import WordsBankCell from 'src/components/WordsBank/WordsBankCell'

type WordsBankPageProps = {
  id: number
}

const WordsBankPage = ({ id }: WordsBankPageProps) => {
  return <WordsBankCell id={id} />
}

export default WordsBankPage
