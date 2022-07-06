import LanguageCell from 'src/components/Language/LanguageCell'

type LanguagePageProps = {
  id: number
}

const LanguagePage = ({ id }: LanguagePageProps) => {
  return <LanguageCell id={id} />
}

export default LanguagePage
