import { Box, Center, Text } from '@chakra-ui/react'
import { Colors } from '@utils/Colors'
import { useEffect, useState } from 'react'

const ErrorPage = () => {
  const refreshPage = () => {
    window.location.reload()
  }

  const [count, setCount] = useState(50)
  useEffect(() => {
    if (count > 0) {
      setInterval(() => {
        setCount(count - 1)
      }, 5000)
    }
    if (count === 0) {
      refreshPage()
    }
  }, [count])

  return (
    <Center height={'100vh'}>
      <Box>
        <Text align='center' pb='10' fontSize={'42px'} fontWeight='bold' color={Colors.primaryColor}>
          आन्तरिक त्रुटि
        </Text>

        <Text justifyContent={'center'} display={'flex'} gap='8' fontSize={'16px'}>
          <Text fontSize={'24px'} fontWeight='black'>
            ओप्स !
          </Text>
          <Text pt='8'>केहि गलत भयो</Text>
        </Text>
        <Text py='10' my='10' textAlign={'center'}>
          तपाईंले खोज्नु भएको पृष्ठमा केही समस्या हुन सक्छ, कृपया पृष्ठलाई ताजा गर्नुहोस् वा पछि पुन: प्रयास गर्नुहोस्
        </Text>
        <Text textAlign={'center'} className='pt-4'>
          {count} सेकेन्ड पछि स्वत: पुन: लोड हुनेछ
        </Text>
      </Box>
    </Center>
  )
}

export default ErrorPage
