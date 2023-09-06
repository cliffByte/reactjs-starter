import type { Preview } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/utils/theme/index'
import '../src/assets/scss/main.scss'
import React from 'react'
import ContextProvider from '../src/contexts/index'
import { BrowserRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <ContextProvider>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ContextProvider>
      </ChakraProvider>
    ),
  ],
}
export default preview
