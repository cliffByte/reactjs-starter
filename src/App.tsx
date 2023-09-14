import { Box } from '@chakra-ui/react'
import { UserRoute, UserAuthRoute, AdminAuthRoute } from './Routes'
import { Route, Routes } from 'react-router-dom'
import { IRoute } from '@interface/global.interface'

function App() {
  // function to map over routes and generate JSX elements
  function renderRoutes(routes: IRoute[]) {
    return routes.map((route: IRoute, index) => (
      <Route path={route?.path} element={route?.element} key={index}>
        {route?.children && route?.children.length > 0 && renderRoutes(route.children)}
      </Route>
    ))
  }

  return (
    <Box>
      <Routes>
        {/* User landing page route */}
        {UserRoute && UserRoute.length > 0 && renderRoutes(UserRoute)}

        {/* User auth routes */}
        {UserAuthRoute && UserAuthRoute.length > 0 && renderRoutes(UserAuthRoute)}

        {/* Admin auth routes */}
        {AdminAuthRoute && AdminAuthRoute.length > 0 && renderRoutes(AdminAuthRoute)}
      </Routes>
    </Box>
  )
}

export default App
