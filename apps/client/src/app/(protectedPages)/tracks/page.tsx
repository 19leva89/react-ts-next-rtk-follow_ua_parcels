import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { TracksView } from './_components/tracks-view'

export const metadata = constructMetadata({ title: 'Tracks' })

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
