import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { RegisterConfirmView } from './_components/register-confirm-view'

export const metadata = constructMetadata({ title: 'Register confirm' })

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
