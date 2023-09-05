import { createContext, useEffect, useState } from 'react'

interface IProps {
  children: React.ReactNode
}
export const AuthContext = createContext<any>(null)

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('cliff_user') ?? '{}'))
  const [rememberMe, setRememberMe] = useState(JSON.parse(localStorage.getItem('cliff_rememberMe') ?? '{}'))

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
