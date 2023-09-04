import { defineStyleConfig } from '@chakra-ui/react'

// define the base component styles
const baseStyle = {
  maxW: {
    base: '100%',
    md: '90%',
    lg: '85%',
  },
}

// export the component theme
const containerTheme = defineStyleConfig({ baseStyle })

export default containerTheme
