import { Stack, Image, Heading } from '@chakra-ui/react'
import { image } from '@config/constant/image'
import { officeInfo } from '@config/constant/office'
import useLang from '@hooks/useLang'

const AuthCompanyInfo = () => {
  const { lang } = useLang()

  return (
    <Stack align={'center'}>
      <Image src={image?.cliffByteLogo} alt='logo' width={'135px'} />
      <Heading fontSize={'18px'} fontWeight='500' pt='2'>
        {officeInfo?.companyName?.[lang]}
      </Heading>
      <Heading fontSize={'15px'} fontWeight='500'>
        {officeInfo?.companyAddress?.[lang]}
      </Heading>
    </Stack>
  )
}

export default AuthCompanyInfo
