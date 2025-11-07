import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { NotFoundBlock } from '@/components/not-found-block'

export const metadata = constructMetadata({ title: 'Not found' })

const NotFoundPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<main>
					<NotFoundBlock />
				</main>
			</div>

			<Footer />
		</>
	)
}

export default NotFoundPage
