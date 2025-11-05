import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NotFoundBlock } from '@/components/not-found-block'

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
