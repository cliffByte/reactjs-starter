import AuthProvider from '@contexts/auth'
import LanguageProvider from '@contexts/Language'
interface Props {
  children: React.ReactNode
}

const ContextProvider = ({ children }: Props) => (
  <AuthProvider>
    <LanguageProvider>{children}</LanguageProvider>
  </AuthProvider>
)
export default ContextProvider
