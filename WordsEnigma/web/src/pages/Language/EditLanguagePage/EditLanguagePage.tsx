import EditLanguageCell from 'src/components/Language/EditLanguageCell'

type LanguagePageProps = {
  id: number
}

const EditLanguagePage = ({ id }: LanguagePageProps) => {
  return <EditLanguageCell id={id} />
}

export default EditLanguagePage
