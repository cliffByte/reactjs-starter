import AuthProvider from './auth'
import LanguageProvider from './Language'
interface Props {
  children: React.ReactNode
}

const ContextProvider = ({ children }: Props) => (
  <AuthProvider>
    <LanguageProvider>{children}</LanguageProvider>
  </AuthProvider>
)
export default ContextProvider
