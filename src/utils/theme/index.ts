import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import ButtonTheme from './components/Button'
import { checkboxTheme } from './components/Checkbox'
import containerTheme from './components/Container'
import InputTheme from './components/Input'
import selectTheme from './components/Select'
import ToastTheme from './components/Toast'
import styles from './styles'
import { RadioTheme } from './components/Radio'

// color mode config
const colorConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// extend the theme
const theme = {
  colorConfig,
  styles,
  components: {
    Container: containerTheme,
    Button: ButtonTheme,
    Input: InputTheme,
    Select: selectTheme,
    Checkbox: checkboxTheme,
    Radio: RadioTheme,
    useToast: ToastTheme,
    Modal: {
      defineStyle: {
        sizes: { xl: { Content: { width: '90vw' } } },
      },
    },
  },
  config: {
    disableTransitionOnChange: true,
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },
}

export default extendTheme(theme)
