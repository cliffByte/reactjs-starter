import { useContext } from 'react'
import { type AuthType } from '@type/global.types'

import { AuthContext } from '@contexts/auth'
const useAuth = () => useContext<AuthType>(AuthContext)

export default useAuth
