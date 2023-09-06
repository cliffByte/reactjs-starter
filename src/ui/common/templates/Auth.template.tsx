import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import AuthCompanyInfo from '@ui/common/molecules/AuthCompanyInfo'
import { Outlet } from 'react-router-dom'

const AuthTemplate = () => {
  return (
    <Flex
      bg={useColorModeValue('gray.50', 'gray.800')}
      minH={'100vh'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <AuthCompanyInfo />
      <Box
        mt='5'
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
        width={{
          lg: '30vw',
          md: '50vw',
          base: '98vw',
        }}
      >
        <Outlet />
      </Box>
    </Flex>
  )
}

export default AuthTemplate
