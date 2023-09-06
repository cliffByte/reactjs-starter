import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { pageNotFoundLabel } from '@data/localization/common/404'
import useLang from '@hooks/useLang'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  const { lang } = useLang()

  return (
    <Box my='10' py='10'>
      <Box py='10'>
        <Text
          textAlign={'center'}
          fontFamily={'helveticarounded_bold'}
          fontWeight='bold'
          fontSize='100px'
          color={'#255d88'}
        >
          404
        </Text>

        <Flex alignItems={'center'} justifyContent='center'>
          <Text fontSize={'14px'}>{pageNotFoundLabel?.opps?.[lang]} &nbsp; </Text>
          <Text fontSize={'20px'}>{pageNotFoundLabel?.pageNotFound?.[lang]}</Text>
        </Flex>
        <Text textAlign={'center'}>{pageNotFoundLabel?.pageNotFoundDescription?.[lang]}</Text>
        <Flex alignItems={'center'} justifyContent='center'>
          <Button
            mt='5'
            size='sm'
            variant='primary'
            onClick={() => {
              navigate(-1)
            }}
            sx={{
              svg: {
                marginTop: '-2px',
              },
            }}
          >
            <IoArrowBack /> &nbsp; {pageNotFoundLabel?.goBack?.[lang]}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default PageNotFound
