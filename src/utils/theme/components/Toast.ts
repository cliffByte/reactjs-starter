import { defineStyleConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const primary = (props: StyleFunctionProps) => ({
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
