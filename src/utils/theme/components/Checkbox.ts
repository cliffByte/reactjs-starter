import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { Colors } from './../../Colors'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    paddingTop: 1,
  },
  control: {
    height: '.8rem',
    // change the background color of the control
    outline: `1px solid ${Colors?.primaryColor}`,
    borderRadius: 2, // change the border radius of the control
    _checked: {
      // change the background color of the control when it's checked
      bg: Colors?.primaryColor,
      border: `1px solid ${Colors?.primaryColor}`,
    },
  },
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })
