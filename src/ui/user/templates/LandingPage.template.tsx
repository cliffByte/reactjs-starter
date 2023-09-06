import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const LandingPageTemplate = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default LandingPageTemplate
