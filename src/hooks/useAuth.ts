import { useContext } from 'react'
import { type AuthType } from '@type/global.types'

import { AuthContext } from '@contexts/auth'

// A custom hook to access the authentication-related context value.
const useAuth = (): AuthType => {
  // Use the useContext hook to access the AuthContext and obtain the authentication-related state.
  // The return value of this hook is an object containing user and rememberMe states and their setter functions.
  return useContext<AuthType>(AuthContext)
}

export default useAuth
