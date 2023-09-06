import { type AuthType } from '@type/global.types'
import { createContext, useEffect, useState } from 'react'

interface IProps {
  children: React.ReactNode
}
export const AuthContext = createContext<AuthType>(null)

const AuthProvider = ({ children }: IProps) => {
  const storedUserData = localStorage.getItem('cliff_user')
  const initialUser: string = storedUserData ? (JSON.parse(storedUserData) as string) : ''

  const storedRememberMeData = localStorage.getItem('cliff_rememberMe')
  const initialRememberMe: string = storedRememberMeData ? (JSON.parse(storedRememberMeData) as string) : ''

  const [user, setUser] = useState<string>(initialUser)
  const [rememberMe, setRememberMe] = useState<string>(initialRememberMe)

  useEffect(() => {
    localStorage.setItem('cliff_rememberMe', JSON.stringify(rememberMe))

    localStorage.setItem('cliff_user', JSON.stringify(user))
  }, [user, rememberMe])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        rememberMe,
        setRememberMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
