import { Avatar } from '@chakra-ui/react'
import { image } from '@config/constant/image'
import useLang from '@hooks/useLang'
import { LanguageEnum } from '@type/global.types'

// A component to toggle between different languages.
const LanguageToggle = () => {
  // Use the custom hook 'useLang' to access the current language and its setter function.
  const { lang, setLang } = useLang()

  // Function to switch the language when the avatar is clicked.
  const switchLanguage = () => {
    // Toggle the language between 'en' (English) and 'ne' (Nepali).
    setLang(lang === LanguageEnum.en ? LanguageEnum.ne : LanguageEnum.en)
  }

  return (
    <>
      {/* Avatar component representing the language switcher */}
      <Avatar
        onClick={switchLanguage}
        p='2px'
        border={'1px solid #a5a5a5'}
        cursor='pointer'
        height='28px'
        width='28px'
        name='Language toggle' // Placeholder name for the avatar
        src={lang === 'en' ? image?.usaFlag : image?.nepalFlag} // Display flag based on the current language
      />
    </>
  )
}

export default LanguageToggle
