import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { Auth } from './features/auth/auth'
import { store } from './app/store'

import { Paths } from './paths'
import Home from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import RegisterConfirmPage from './pages/register-confirm'
import RecoveryPage from './pages/recovery'
import RecoveryConfirmPage from './pages/recovery-confirm'
import ProfilePage from './pages/profile'
import TrackAddPage from './pages/track-add'
import TracksPage from './pages/tracks'
import TrackPage from './pages/track'
import CarriersPage from './pages/carriers'
import NotFound from './pages/not-found'

import './styles/normalize.css'
import './styles/main.css'

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <Home />,
	},
	{
		path: Paths.login,
		element: <LoginPage />,
	},
	{
		path: Paths.register,
		element: <RegisterPage />,
	},
	{
		path: Paths.registerConfirm,
		element: <RegisterConfirmPage />,
	},
	{
		path: Paths.recovery,
		element: <RecoveryPage />,
	},
	{
		path: Paths.recoveryConfirm,
		element: <RecoveryConfirmPage />,
	},
	{
		path: Paths.profile,
		element: <ProfilePage />,
	},
	{
		path: Paths.tracks,
		element: <TracksPage />,
	},
	{
		path: `${Paths.tracks}/:id`,
		element: <TrackPage />,
	},
	{
		path: Paths.trackAdd,
		element: <TrackAddPage />,
	},
	{
		path: Paths.carriers,
		element: <CarriersPage />,
	},
	{
		path: Paths.notFound,
		element: <NotFound />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<Provider store={store}>
		<div className='body__wrapper'>
			<Auth>
				<RouterProvider router={router} />
			</Auth>
		</div>
	</Provider>,
)
