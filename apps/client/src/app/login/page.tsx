import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LoginView } from './_components/login-view'

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
