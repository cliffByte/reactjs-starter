import { useEffect } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import Sidebar from '@ui/admin/organisms/Sidebar'
import Navbar from '@ui/admin/organisms/Navbar'
import BreadcrumbMenu from '@ui/common/molecules/Breadcrumb'
import { Outlet } from 'react-router-dom'

/**
 * AdminTemplate component serves as the layout template for the admin panel.
 * It includes a sidebar, navbar, breadcrumb navigation, and content area.
 */
const AdminTemplate = () => {
  // Hooks and state management
  const { setColorMode } = useColorMode()

  useEffect(() => {
    // Set the color mode to 'light' for the admin panel
    setColorMode('light')
  }, [setColorMode])

  return (
    <Box
      display={{
        md: 'flex',
        base: 'block',
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      <Box width={'100%'} height={{ base: '100%', md: '100vh' }} overflowY='auto'>
        <Box p='2'>
          {/* Navbar */}
          <Navbar />

          {/* Breadcrumb navigation */}
          <BreadcrumbMenu baseUrl='/admin-dashboard' />

          <Box
            style={{
              overflowY: 'auto',
              height: 'calc(100vh - 105px)',
            }}
            pt='2'
          >
            {/* Render nested routes */}
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AdminTemplate
