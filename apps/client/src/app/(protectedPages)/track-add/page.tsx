import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TrackAddView } from './_components/track-add-view'

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
