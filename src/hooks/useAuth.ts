import { useContext } from 'react'

import { AuthContext } from '@contexts/auth'
const useAuth = () => useContext<any>(AuthContext)

export default useAuth
