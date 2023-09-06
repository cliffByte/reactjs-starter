/**
 * @ variant for button component
 * @ primary
 * @ outline
 * @ ghost
 * @ filled
 */

import { defineStyleConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'
import { DarkTheme, LightTheme } from '@utils/Colors'

const primary = (props: StyleFunctionProps) => ({
  bg: mode(LightTheme?.primaryColor, DarkTheme?.primaryColor)(props),
  outline: `1px solid ${LightTheme?.primaryColor}`,
  border: 'none',
  color: mode('#fff', '#fff')(props),
  _hover: {
    bg: mode(LightTheme?.primaryHoverColor, LightTheme?.primaryHoverColor)(props),
  },
  _loading: {
    bg: mode(LightTheme?.primaryColor, LightTheme?.primaryColor)(props),
    opacity: 0.9,
    color: mode('#fff', '#fff')(props),
    _hover: {
      bg: mode(LightTheme?.primaryHoverColor, LightTheme?.primaryHoverColor)(props),
      color: mode('#fff', '#fff')(props),
    },
  },
  _disabled: {
    opacity: 0.9,
    color: '#fff',
  },
})

const ButtonTheme = defineStyleConfig({
  baseStyle: {
    outline: ' none !important',
    border: ' none !important',
    borderRadius: '.2rem !important',
    fontWeight: '400',
    fontSize: '14px !important',
    padding: '0 1.5rem !important',
  },
  variants: {
    primary,
  },
})

export default ButtonTheme
