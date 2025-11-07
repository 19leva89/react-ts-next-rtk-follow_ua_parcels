import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RecoveryView } from './_components/recovery-view'

const RecoveryPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<RecoveryView />
			</div>

			<Footer />
		</>
	)
}

export default RecoveryPage
