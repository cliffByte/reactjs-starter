import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@utils/theme'
import '@assets/scss/main.scss'
import ContextProvider from '@contexts/index'

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
