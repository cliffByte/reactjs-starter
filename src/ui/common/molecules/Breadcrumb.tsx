import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { breadcrumbLabel } from '@data/localization/common/breadcrumb'
import { utilLabel } from '@data/localization/common/utils'
import useLang from '@hooks/useLang'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Define the props interface for the BreadcrumbMenu component
interface IProps {
  baseUrl: string // The base URL for the "Home" breadcrumb item
}

// Define the BreadcrumbMenu component
const BreadcrumbMenu = (props: IProps) => {
  // Destructure the props
  const { baseUrl } = props

  // Get the current language using the useLang hook
  const { lang } = useLang()

  // Get the navigation function and location using react-router-dom hooks
  const navigate = useNavigate()
  const location = useLocation()

  // Split the current URL into segments
  const segments = location.pathname.split('/').slice(1)

  // Helper function to capitalize the first letter of a string
  const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ')
  }

  // Helper function to format breadcrumb labels
  const formatBreadcrumbLabel = (segment: string) => {
    // Attempt to retrieve a translated label from localization data
    const translatedLabel = breadcrumbLabel[segment]?.[lang]
    // If a translation is not available, capitalize and replace hyphens with spaces
    return translatedLabel ?? capitalize(segment) ?? ''
  }

  // Render the BreadcrumbMenu component
  return (
    <Flex
      direction={{ sm: 'row', base: 'column' }}
      justifyContent='space-between'
      alignItems='center'
      gap='2'
      py='2'
      borderBottom='1px'
      borderColor={useColorModeValue('gray.300', 'gray.500')}
    >
      <Breadcrumb fontWeight='medium' fontSize='sm'>
        {/* Render the "Home" breadcrumb item */}
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={baseUrl}>
            {formatBreadcrumbLabel('home')}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* Render additional breadcrumb items for segments */}
        {segments.slice(1, 3).map((segment, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink>{formatBreadcrumbLabel(segment)}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      {/* Render the "Go Back" button */}
      <Box>
        <Button
          size='sm'
          variant='outline'
          colorScheme='telegram'
          onClick={() => {
            // Use the navigate function to navigate back
            navigate(-1)
          }}
        >
          {/* Display the "Go Back" button label */}
          {utilLabel?.goBack?.[lang]}
        </Button>
      </Box>
    </Flex>
  )
}

// Export the BreadcrumbMenu component
export default BreadcrumbMenu
