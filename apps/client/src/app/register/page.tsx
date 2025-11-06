import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RegisterView } from './_components/register-view'

const RegisterPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<RegisterView />
			</div>

			<Footer />
		</>
	)
}

export default RegisterPage
