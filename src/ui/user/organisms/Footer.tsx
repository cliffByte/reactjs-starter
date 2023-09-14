import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { image } from '@config/constant/image'
import { officeInfo } from '@config/constant/office'
import { footerLabel } from '@data/localization/user/footer'
import { convertToDevanagari } from '@functions/digitConverter'
import useLang from '@hooks/useLang'
import { Link as ReactLink } from 'react-router-dom'
import { type ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiOutlineUserSwitch } from 'react-icons/ai'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithAppLinksAndSocial() {
  const { lang } = useLang()

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      position='relative'
    >
      <Grid
        templateColumns={{
          xl: 'repeat(5, 1fr)',
          md: 'repeat(2, 1fr)',
          base: '1fr',
        }}
        px='4'
        py='6'
        gap={6}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Stack>
            <Flex gap='4' direction={'column'}>
              <Image src={image.cliffByteLogo} width='175px' alt='logo' />
              <Box>
                <Text fontWeight={'600'} fontSize='18px'>
                  {officeInfo?.companyName?.[lang]}
                </Text>
                <Text fontWeight={'600'} fontSize='15px'>
                  {officeInfo?.companyAddress?.[lang]}
                </Text>
              </Box>
            </Flex>
            <Text pt='1' fontSize={'14px'}>
              {officeInfo?.companyDescription?.[lang]}
            </Text>
          </Stack>
        </GridItem>

        <Stack align={'flex-start'}>
          <ListHeader> {footerLabel?.quickLink?.[lang]}</ListHeader>
          <Link href={'#'}>{footerLabel?.home?.[lang]}</Link>
          <Link href={'#'}>{footerLabel?.aboutUs?.[lang]}</Link>
          <Link href={'#'}>{footerLabel?.contactUs?.[lang]} </Link>
          <Link href={'#'}>{footerLabel?.faq?.[lang]} </Link>
          <Link href={'#'}>{footerLabel?.download?.[lang]} </Link>
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader>{footerLabel?.importantLink?.[lang]} </ListHeader>
          <Link href={'https://mofaga.gov.np/'}>{footerLabel?.ministryOfFederalAffairs?.[lang]} </Link>
          <Link href={'http://www.moha.gov.np/'}>{footerLabel?.homeMinistry?.[lang]} </Link>
          <Link href={'https://www.opmcm.gov.np/'}>{footerLabel?.primeMinisterAndCouncilOfMinisters?.[lang]} </Link>
          <Link href={'https://www.npc.gov.np/np'}>{footerLabel?.nationalPlanningCommission?.[lang]} </Link>
          <AdminLogin />
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader> {footerLabel?.officeLocation?.[lang]}</ListHeader>
          <Box>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.7916168574648!2d85.33502426159647!3d27.696720159975246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1922adf46107%3A0x14bad80620f24e14!2sCliff%20Byte!5e0!3m2!1sen!2snp!4v1693993748570!5m2!1sen!2snp'
              width='100%'
              height='150'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </Box>
        </Stack>
      </Grid>

      <Box pb={3}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Text fontSize={'sm'} textAlign={'center'}>
            {footerLabel?.developedBy?.[lang]}
          </Text>
        </Flex>
        <Center pt='5'>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Center>

        <Text pt={2} fontSize={'sm'} textAlign={'center'}>
          {convertToDevanagari(new Date().getFullYear()?.toString(), lang)}&nbsp;
          {officeInfo?.companyName?.[lang]}
          &nbsp;
          {footerLabel?.allRightReserved?.[lang]}
        </Text>
      </Box>
    </Box>
  )
}

const AdminLogin = () => {
  const { lang } = useLang()

  return (
    <Button
      size='sm'
      fontSize={'sm'}
      fontWeight={500}
      as={ReactLink}
      colorScheme='telegram'
      variant={'outline'}
      to='auth/admin'
    >
      {footerLabel?.adminLogin?.[lang]}&nbsp;&nbsp;
      <AiOutlineUserSwitch size={'14px'} />
    </Button>
  )
}
