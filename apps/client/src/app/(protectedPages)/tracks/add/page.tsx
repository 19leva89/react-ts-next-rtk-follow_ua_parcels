import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { TrackAddView } from './_components/track-add-view'

export const metadata = constructMetadata({ title: 'Add track' })

const TrackAddPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<TrackAddView />
			</div>

			<Footer />
		</>
	)
}

export default TrackAddPage
