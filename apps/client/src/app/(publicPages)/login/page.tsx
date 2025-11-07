import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { LoginView } from './_components/login-view'

export const metadata = constructMetadata({ title: 'Login' })

const LoginPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<LoginView />
			</div>

			<Footer />
		</>
	)
}

export default LoginPage
