import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '@ui/user/organisms/Navbar'

const LandingPageTemplate = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default LandingPageTemplate
