import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@utils/theme'
import '@assets/scss/main.scss'
import ContextProvider from '@contexts/index'
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from 'Error.Boundary.tsx'

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <ErrorBoundary>
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </ChakraProvider>
  </ErrorBoundary>
)
