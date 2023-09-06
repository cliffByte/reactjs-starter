import { type AuthType } from '@type/global.types'
import { createContext, useEffect, useState } from 'react'

// Define the properties that can be passed to the AuthProvider component.
interface AuthProviderProps {
  children: React.ReactNode // The content to be wrapped by the AuthProvider.
}

// Create a context to manage authentication-related state.
export const AuthContext = createContext<AuthType | null>(null)

// A component to provide and manage authentication-related state.
const AuthProvider = ({ children }: AuthProviderProps) => {
  // Retrieve user and rememberMe data from local storage, if available.
  const storedUserData = localStorage.getItem('cliff__user')
  const initialUser: string = storedUserData ? (JSON.parse(storedUserData) as string) : ''

  const storedRememberMeData = localStorage.getItem('cliff__rememberMe')
  const initialRememberMe: string = storedRememberMeData ? (JSON.parse(storedRememberMeData) as string) : ''

  // Initialize user and rememberMe states with the retrieved data or empty strings.
  const [user, setUser] = useState<string>(initialUser)
  const [rememberMe, setRememberMe] = useState<string>(initialRememberMe)

  // Update local storage whenever the user or rememberMe state changes.
  useEffect(() => {
    localStorage.setItem('cliff__rememberMe', JSON.stringify(rememberMe))
    localStorage.setItem('cliff__user', JSON.stringify(user))
  }, [user, rememberMe])

  return (
    // Provide the user and rememberMe states and their setter functions to child components.
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
