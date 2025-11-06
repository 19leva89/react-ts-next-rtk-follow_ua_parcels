import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TracksView } from './_components/tracks-view'

const TracksPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<TracksView />
			</div>

			<Footer />
		</>
	)
}

export default TracksPage
