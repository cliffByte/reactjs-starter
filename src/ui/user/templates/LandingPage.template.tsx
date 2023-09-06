import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '@ui/user/organisms/Navbar'
import Footer from '@ui/user/organisms/Footer'

const LandingPageTemplate = () => {
  return (
    <Flex minH={'100vh'} direction={'column'} justifyContent={'space-between'}>
      <Box>
        <Box position={'sticky'} top='0'>
          <Navbar />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Flex>
  )
}

export default LandingPageTemplate
