// user -- landing page
import LandingPageTemplate from '@ui/user/templates/LandingPage.template'
import LandingPage from '@ui/user/pages/LandingPage'
// user -- auth
import UserLogin from '@ui/user/pages/auth/Login'
import UserSignLogin from '@ui/user/pages/auth/SignUp'

// common -- pages
import PageNotFound from '@ui/common/pages/PageNotFound'
// common --template
import AuthTemplate from '@ui/common/templates/Auth.template'
import { IRoute } from '@interface/global.interface'

// Admin
// admin -- auth
import AdminLogin from '@ui/admin/pages/auth/Login'

export const UserRoute: IRoute[] = [
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

export const UserAuthRoute: IRoute[] = [
  {
    path: '/auth',
    element: <AuthTemplate />,
    children: [
      {
        path: '/auth',
        element: <UserLogin />,
      },
      {
        path: '/auth/user',
        element: <UserLogin />,
      },
      {
        path: '/auth/user/sign-in',
        element: <UserLogin />,
      },
      {
        path: '/auth/user/sign-up',
        element: <UserSignLogin />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]

export const AdminAuthRoute: IRoute[] = [
  {
    path: '/auth/admin',
    element: <AuthTemplate />,
    children: [
      {
        path: '/auth/admin',
        element: <AdminLogin />,
      },
      {
        path: '/auth/admin/sign-in',
        element: <AdminLogin />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]
