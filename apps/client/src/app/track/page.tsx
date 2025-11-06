import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TrackView } from './_components/track-view'

const TrackPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<TrackView />
			</div>

			<Footer />
		</>
	)
}

export default TrackPage
