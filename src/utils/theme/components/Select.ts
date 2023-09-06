/**
 * @ select option component
 */

import { defineStyleConfig } from '@chakra-ui/react'
import { Colors } from '@utils/Colors'

const selectTheme = defineStyleConfig({
  baseStyle: {
    field: {
      outline: `1.5px solid ${Colors.primaryColor}`,
    },
  },
  variants: {
    error: {
      field: {
        outline: `1px solid ${Colors.secondaryColor}`,
        border: 'none',
        _focus: {
          boxShadow: `0 0 0 1.5px ${Colors.secondaryColor}`,
          border: 'none',
        },
      },
    },
    filled: {
      field: {
        outline: `1px solid ${Colors.primaryColor}`,
        border: 'none',
        _focus: {
          boxShadow: `0 0 0 1.5px ${Colors.primaryColor}`,
          border: 'none',
        },
      },
    },
  },
})

export default selectTheme
