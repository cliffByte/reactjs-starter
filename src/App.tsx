import { Box } from '@chakra-ui/react'
import { UserPlanningRoute } from './Routes'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Box>
      <Routes>
        {/* user -- landing page route */}
        {UserPlanningRoute &&
          UserPlanningRoute?.length > 0 &&
          UserPlanningRoute.map((route, index) => {
            return (
              <Route path={route?.path} element={route?.element} key={index}>
                {route?.children &&
                  route?.children?.length > 0 &&
                  route?.children.map((child, index) => {
                    return <Route path={child?.path} element={child?.element} key={index} />
                  })}
              </Route>
            )
          })}
      </Routes>
    </Box>
  )
}

export default App
