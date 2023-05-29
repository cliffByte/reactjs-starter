/**
 * @ variant for button component
 * @ primary
 * @ primaryOutline
 * @ secondary
 * @ secondaryOutline
 */

import { defineStyleConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'
import { Colors, DarkTheme, LightTheme } from '../../Colors'

const primary = (props: StyleFunctionProps) => ({
  bg: mode(LightTheme?.primaryColor, DarkTheme?.primaryColor)(props),
  outline: `1px solid #${LightTheme?.primaryColor}`,
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
})

const primaryOutline = (props: StyleFunctionProps) => ({
  bg: mode('transparent', 'transparent')(props),
  color: mode(LightTheme?.primaryColor, LightTheme?.primaryColor)(props),
  border: `1px solid ${Colors?.primaryColor}`,
  _hover: {
    bg: mode(LightTheme?.primaryColor, LightTheme?.primaryColor)(props),
    color: mode('#fff', '#fff')(props),
  },
  _loading: {
    bg: mode('transparent', 'transparent')(props),
    color: mode('#03c99b', '#03c99b')(props),
    _hover: {
      bg: mode('transparent', 'transparent')(props),
      color: mode('#fff', '#fff')(props),
    },
  },
})

const secondary = (props: StyleFunctionProps) => ({
  bg: mode(LightTheme?.secondaryColor, DarkTheme?.secondaryColor)(props),
  outline: `1px solid #${LightTheme?.secondaryColor}`,
  color: mode('#fff', '#fff')(props),
  _hover: {
    bg: mode(LightTheme?.secondaryHoverColor, LightTheme?.secondaryHoverColor)(props),
  },
  _loading: {
    bg: mode('#03c99b', '#03c99b')(props),
    color: mode('#000', '#000')(props),
    _hover: {
      bg: mode('#03c99b', '#03c99b')(props),
      color: mode('#000', '#000')(props),
    },
  },
})

const secondaryOutline = (props: StyleFunctionProps) => ({
  bg: mode('transparent', 'transparent')(props),
  color: mode(LightTheme?.secondaryColor, LightTheme?.secondaryColor)(props),
  border: `1px solid ${Colors?.secondaryColor}`,
  _hover: {
    bg: mode(LightTheme?.secondaryColor, LightTheme?.secondaryColor)(props),
    color: mode('#fff', '#fff')(props),
  },
  _loading: {
    bg: mode('transparent', 'transparent')(props),
    color: mode('#03c99b', '#03c99b')(props),
    _hover: {
      bg: mode('transparent', 'transparent')(props),
      color: mode('#fff', '#fff')(props),
    },
  },
})

const ButtonTheme = defineStyleConfig({
  baseStyle: {
    outline: 'none !important',
    borderRadius: '.2rem !important',
    fontWeight: '400',
    fontSize: '14px !important',
    padding: '0 1.5rem !important',
  },
  variants: {
    primary,
    primaryOutline,
    secondary,
    secondaryOutline,
  },
})

export default ButtonTheme
