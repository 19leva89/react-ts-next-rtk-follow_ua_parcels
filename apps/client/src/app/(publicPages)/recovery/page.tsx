import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { RecoveryView } from './_components/recovery-view'

export const metadata = constructMetadata({ title: 'Recovery' })

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
