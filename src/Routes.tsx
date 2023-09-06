// user -- landing page
import LandingPageTemplate from '@ui/user/templates/LandingPage.template'
import LandingPage from '@ui/user/pages/LandingPage'

// common -- pages
import PageNotFound from '@ui/common/pages/PageNotFound'

export const UserPlanningRoute = [
  {
    path: '',
    element: <LandingPageTemplate />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]
