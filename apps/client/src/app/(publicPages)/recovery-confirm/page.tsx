import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { RecoveryConfirmView } from './_components/recovery-confirm-view'

export const metadata = constructMetadata({ title: 'Recovery confirm' })

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
