import EditWordsBankCell from 'src/components/WordsBank/EditWordsBankCell'

type WordsBankPageProps = {
  id: number
}

const EditWordsBankPage = ({ id }: WordsBankPageProps) => {
  return <EditWordsBankCell id={id} />
}

export default EditWordsBankPage
