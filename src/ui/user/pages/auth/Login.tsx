import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useColorMode,
  useToast,
} from '@chakra-ui/react'
import { authLabel } from '@data/localization/common/auth'
import { generatePlaceholder } from '@functions/generateMessage'
import useLang from '@hooks/useLang'
import { loginSchema } from '@config/schema/common/auth.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { DarkTheme, LightTheme } from '@utils/Colors'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineLock } from 'react-icons/ai'
import { BiHide, BiShow } from 'react-icons/bi'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { AuthValues } from '@type/global.types'

const Login = () => {
  const { lang } = useLang()
  const toast = useToast()
  const [show, setShow] = useState<boolean>(false)
  const handleClick = () => {
    setShow(!show)
  }
  const { colorMode } = useColorMode()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = () => {
    try {
      toast.closeAll()
      toast({
        title: authLabel?.success?.[lang],
        description: authLabel?.loginSuccessfully?.[lang],
        status: 'success',
        isClosable: true,
        duration: 2000,
      })
    } catch (err) {
      toast.closeAll()
      toast({
        title: authLabel?.error?.[lang],
        description: authLabel?.invalidLoginCredential?.[lang],
        status: 'error',
        isClosable: true,
        duration: 2000,
      })
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Text
            fontSize='md'
            fontWeight='bold'
            color={colorMode === 'light' ? LightTheme.primaryTextColor : DarkTheme.primaryTextColor}
          >
            {authLabel?.userLogin[lang]}
          </Text>

          <FormControl isInvalid={errors.email != null}>
            <FormLabel>{authLabel?.emailOrMobileNumber[lang]}</FormLabel>
            <InputGroup size='sm'>
              <InputLeftElement pointerEvents='none'>
                <IoMailUnreadOutline />
              </InputLeftElement>
              <Input
                size='sm'
                variant={errors?.email != null ? 'error' : ''}
                type='text'
                {...register('email')}
                placeholder={generatePlaceholder(authLabel?.emailOrMobileNumber[lang], lang)}
              />
            </InputGroup>
            <FormErrorMessage>{errors?.email?.message?.[lang]}</FormErrorMessage>
          </FormControl>
          <FormControl pt='2' isInvalid={errors.password != null}>
            <FormLabel>{authLabel?.password[lang]} </FormLabel>
            <InputGroup size='sm'>
              <InputLeftElement pointerEvents='none'>
                <AiOutlineLock />
              </InputLeftElement>
              <Input
                variant={errors?.password != null ? 'error' : ''}
                type={show ? 'text' : 'password'}
                {...register('password')}
                placeholder={'xxxxxxxx'}
              />
              <InputRightElement onClick={handleClick} cursor='pointer'>
                {show ? <BiShow /> : <BiHide />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors?.password?.message?.[lang]}</FormErrorMessage>
          </FormControl>
          <Stack spacing={6}>
            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Checkbox {...register('rememberMe')} defaultChecked>
                {authLabel?.rememberMe?.[lang]}
              </Checkbox>
            </Stack>
            <Button
              isLoading={isSubmitting}
              loadingText={authLabel?.logging[lang]}
              size='sm'
              type='submit'
              width={'100%'}
              variant={'primary'}
            >
              {authLabel?.login[lang]}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  )
}

export default Login
