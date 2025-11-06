import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RecoveryConfirmView } from './_components/recovery-confirm-view'

const RecoveryConfirmPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<RecoveryConfirmView />
			</div>

			<Footer />
		</>
	)
}

export default RecoveryConfirmPage
