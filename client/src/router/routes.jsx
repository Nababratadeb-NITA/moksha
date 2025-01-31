import nprogress from 'nprogress'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { isNullOrUndefined } from '@arpansaha13/utils'
import { allowIfNotAuthenticated } from '~loaders/auth.loader'
import { getReceivedTeamInvites } from '~loaders/account.loader'

import AuthLayout from '../layouts/auth'
import DefaultLayout from '../layouts/default'
import AccountLayout from '../layouts/account'
import SettingsLayout from '../layouts/settings'
import FloatingWindow from '../layouts/floating-window'

import { Component as NotFound } from '../pages/404'

// const AuthLayout = lazy(() => import('../layouts/auth'))
// const DefaultLayout = lazy(() => import('../layouts/default'))
// const AccountLayout = lazy(() => import('../layouts/account'))
// const FloatingWindow = lazy(() => import('../layouts/floating-window'))

const Home = () => import('../pages/Home')
const Events = () => import('../pages/events')
const Event = () => import('../pages/events/Event')
const Contests = () => import('../pages/contests')
const Contest = () => import('../pages/contests/Contest')
const Faqs = () => import('../pages/Faqs')
const Contact = () => import('../pages/Contact')
const Team = () => import('../pages/teams/Team')
const CreateTeam = () => import('../pages/teams/Create')
const Merch = () => import('../pages/Merch')

const Profile = () => import('../pages/account/Profile')
const Teams = () => import('../pages/account/Teams')
const Registrations = () => import('../pages/account/Registrations')
const Settings = () => import('../pages/account/settings')
const EditProfile = () => import('../pages/account/settings/edit-profile')
const ChangePassword = () => import('../pages/account/settings/change-password')

const Login = () => import('../pages/auth/login')
const Registration = () => import('../pages/auth/register')
const Verification = () => import('../pages/auth/verification')
const ResendVerificationLink = () => import('../pages/auth/resend-verification-link')
const ForgotPassword = () => import('../pages/auth/forgot-password')
const ResetPassword = () => import('../pages/auth/reset-password')

function fetchRoute(rImport) {
  return async () => {
    if (!nprogress.isStarted()) nprogress.start()
    const rImported = await rImport()
    if (isNullOrUndefined(rImported.loader)) nprogress.done()
    return rImported
  }
}

const routes = createRoutesFromElements(
  <Route element={<FloatingWindow />}>
    <Route element={<DefaultLayout />}>
      <Route path='/' lazy={fetchRoute(Home)} />
      <Route path='/faqs' lazy={fetchRoute(Faqs)} />
      <Route path='/merch' lazy={fetchRoute(Merch)} />
      <Route path='/contact' lazy={fetchRoute(Contact)} />

      <Route path='/events' lazy={fetchRoute(Events)} />
      <Route path='/events/:club/:event' lazy={fetchRoute(Event)} errorElement={<NotFound />} />

      <Route path='/contests' lazy={fetchRoute(Contests)} />
      <Route path='/contests/:club/:contest' lazy={fetchRoute(Contest)} errorElement={<NotFound />} />

      <Route path='/teams/create' lazy={fetchRoute(CreateTeam)} />
      <Route path='/teams/:team' lazy={fetchRoute(Team)} errorElement={<NotFound />} />

      <Route path='/*' element={<NotFound />} />

      <Route loader={getReceivedTeamInvites} element={<AccountLayout />}>
        <Route path='/account/profile' lazy={fetchRoute(Profile)} />
        <Route path='/account/teams' lazy={fetchRoute(Teams)} />
        <Route path='/account/registrations' lazy={fetchRoute(Registrations)} />
        <Route path='/account/settings' lazy={fetchRoute(Settings)} />

        <Route element={<SettingsLayout />}>
          <Route path='/account/settings/edit-profile' lazy={fetchRoute(EditProfile)} />
          <Route path='/account/settings/change-password' lazy={fetchRoute(ChangePassword)} />
        </Route>
      </Route>
    </Route>

    <Route loader={allowIfNotAuthenticated} element={<AuthLayout />}>
      <Route path='/auth/login' lazy={fetchRoute(Login)} />
      <Route path='/auth/register' lazy={fetchRoute(Registration)} />
      <Route path='/auth/verification/:hash' lazy={fetchRoute(Verification)} />
      <Route path='/auth/forgot-password' lazy={fetchRoute(ForgotPassword)} />
      <Route path='/auth/reset-password/:hash' lazy={fetchRoute(ResetPassword)} />
      <Route path='/auth/resend-verification-link' lazy={fetchRoute(ResendVerificationLink)} />
    </Route>
  </Route>
)

const router = createBrowserRouter(routes)

function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes
