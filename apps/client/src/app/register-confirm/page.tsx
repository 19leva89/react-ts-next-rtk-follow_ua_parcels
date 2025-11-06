import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RegisterConfirmView } from './_components/register-confirm-view'

const RegisterConfirmPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<RegisterConfirmView />
			</div>

			<Footer />
		</>
	)
}

export default RegisterConfirmPage
