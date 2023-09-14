import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
import { signUpSchema } from '@config/schema/common/auth.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Colors, DarkTheme, LightTheme } from '@utils/Colors'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineLock, AiOutlineMobile } from 'react-icons/ai'
import { BiHide, BiShow } from 'react-icons/bi'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { SignUpValues } from '@type/global.types'
import RequireSign from '@ui/common/molecules/RequireSign'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SignUp = () => {
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
  } = useForm<SignUpValues>({
    resolver: yupResolver(signUpSchema(lang)),
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      termsAndCondition: true,
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
    <Box
      width={{
        lg: '40vw',
        md: '70vw',
        base: '98vw',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Text
            fontSize='md'
            fontWeight='bold'
            color={colorMode === 'light' ? LightTheme.primaryTextColor : DarkTheme.primaryTextColor}
          >
            {authLabel?.userLogin[lang]}
          </Text>
          <Flex
            gap='4'
            direction={{
              md: 'row',
              base: 'column',
            }}
          >
            <FormControl isInvalid={errors.firstName != null}>
              <FormLabel>
                {authLabel?.firstName[lang]}
                <RequireSign />
              </FormLabel>
              <InputGroup size='sm'>
                <InputLeftElement pointerEvents='none'>
                  <FiUser />
                </InputLeftElement>
                <Input
                  size='sm'
                  variant={errors?.firstName != null ? 'error' : ''}
                  type='text'
                  {...register('firstName')}
                  placeholder={generatePlaceholder(authLabel?.firstName[lang], lang)}
                />
              </InputGroup>
              <FormHelperText>{authLabel?.inBlockLetters?.[lang]}</FormHelperText>
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.middleName != null}>
              <FormLabel>{authLabel?.middleName[lang]}</FormLabel>
              <InputGroup size='sm'>
                <InputLeftElement pointerEvents='none'>
                  <FiUser />
                </InputLeftElement>
                <Input
                  size='sm'
                  variant={errors?.middleName != null ? 'error' : ''}
                  type='text'
                  {...register('middleName')}
                  placeholder={generatePlaceholder(authLabel?.middleName[lang], lang)}
                />
              </InputGroup>
              <FormHelperText>{authLabel?.inBlockLetters?.[lang]}</FormHelperText>
              <FormErrorMessage>{errors?.middleName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.lastName != null}>
              <FormLabel>
                {authLabel?.lastName[lang]}
                <RequireSign />
              </FormLabel>
              <InputGroup size='sm'>
                <InputLeftElement pointerEvents='none'>
                  <FiUser />
                </InputLeftElement>
                <Input
                  size='sm'
                  variant={errors?.lastName != null ? 'error' : ''}
                  type='text'
                  {...register('lastName')}
                  placeholder={generatePlaceholder(authLabel?.lastName[lang], lang)}
                />
              </InputGroup>
              <FormHelperText>{authLabel?.inBlockLetters?.[lang]}</FormHelperText>
              <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex
            gap='4'
            direction={{
              md: 'row',
              base: 'column',
            }}
          >
            <FormControl isInvalid={errors.email != null}>
              <FormLabel>
                {authLabel?.email[lang]}
                <RequireSign />
              </FormLabel>
              <InputGroup size='sm'>
                <InputLeftElement pointerEvents='none'>
                  <IoMailUnreadOutline />
                </InputLeftElement>
                <Input
                  size='sm'
                  variant={errors?.email != null ? 'error' : ''}
                  type='text'
                  {...register('email')}
                  placeholder={generatePlaceholder(authLabel?.email[lang], lang)}
                />
              </InputGroup>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.phoneNumber != null}>
              <FormLabel>
                {authLabel?.phoneNumber[lang]}
                <RequireSign />
              </FormLabel>
              <InputGroup size='sm'>
                <InputLeftElement pointerEvents='none'>
                  <AiOutlineMobile />
                </InputLeftElement>
                <Input
                  size='sm'
                  variant={errors?.phoneNumber != null ? 'error' : ''}
                  type='text'
                  {...register('phoneNumber')}
                  placeholder={generatePlaceholder(authLabel?.phoneNumber[lang], lang)}
                />
              </InputGroup>
              <FormErrorMessage>{errors?.phoneNumber?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex
            gap='4'
            direction={{
              md: 'row',
              base: 'column',
            }}
          >
            <FormControl pt='2' isInvalid={errors.password != null}>
              <FormLabel>
                {authLabel?.password[lang]}
                <RequireSign />
              </FormLabel>
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
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </FormControl>{' '}
            <FormControl pt='2' isInvalid={errors.confirmPassword != null}>
              <FormLabel>
                {authLabel?.confirmPassword[lang]}
                <RequireSign />
              </FormLabel>
              <InputGroup size='sm'>
                <InputLeftElement pointerEvents='none'>
                  <AiOutlineLock />
                </InputLeftElement>
                <Input
                  variant={errors?.confirmPassword != null ? 'error' : ''}
                  type={show ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  placeholder={'xxxxxxxx'}
                />
                <InputRightElement onClick={handleClick} cursor='pointer'>
                  {show ? <BiShow /> : <BiHide />}
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors?.confirmPassword?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Stack spacing={6}>
            <Box>
              <FormControl pt='2' isInvalid={errors.termsAndCondition != null}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox {...register('termsAndCondition')} defaultChecked>
                    {authLabel?.iAgreeTermsAndCondition?.[lang]}
                  </Checkbox>
                </Stack>
                <FormErrorMessage>{errors?.termsAndCondition?.message}</FormErrorMessage>
              </FormControl>
            </Box>
            <Button
              isLoading={isSubmitting}
              loadingText={authLabel?.submitting[lang]}
              size='sm'
              type='submit'
              width={'100%'}
              variant={'primary'}
            >
              {authLabel?.signUp[lang]}
            </Button>
          </Stack>
        </Stack>
      </form>
      <Text pt='4'>
        {authLabel?.alreadyHaveAnAccount[lang]}&nbsp;
        <Link to='/auth/user' style={{ color: Colors.primaryColor, fontWeight: '600' }}>
          {authLabel?.login[lang]}
        </Link>
      </Text>
    </Box>
  )
}

export default SignUp
