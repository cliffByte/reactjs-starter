import { Component, ErrorInfo, ReactNode } from 'react'
import ErrorPage from './ErrorPage'

// Define the props that can be passed to the ErrorBoundary component.
interface ErrorBoundaryProps {
  children: ReactNode // The content to be wrapped by the error boundary.
  onHandleError?: (error: Error, errorInfo: ErrorInfo) => void // Optional error handling callback.
}

// Define the state of the ErrorBoundary component.
interface ErrorBoundaryState {
  hasError: boolean // Indicates whether an error has occurred.
}

// A higher-order component (HOC) for error handling.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // A static method to update state when an error occurs in any child component.
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // A lifecycle method called when an error is caught.
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error or perform other actions here.
    if (this.props.onHandleError) {
      this.props.onHandleError(error, errorInfo)
    }
  }

  render() {
    // If an error has occurred, render the ErrorPage component.
    if (this.state.hasError) {
      return <ErrorPage />
    }

    // Otherwise, render the children provided to the ErrorBoundary.
    return this.props.children
  }
}

export default ErrorBoundary
