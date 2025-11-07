import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { RegisterView } from './_components/register-view'

export const metadata = constructMetadata({ title: 'Register' })

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
