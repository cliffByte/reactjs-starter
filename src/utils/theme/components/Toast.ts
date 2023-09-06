import { defineStyleConfig } from '@chakra-ui/react'

const primary = () => ({
  bg: 'red',
})

const ToastTheme = defineStyleConfig({
  baseStyle: {
    color: 'red',
  },
  variants: {
    success: primary,
  },
})
export default ToastTheme
