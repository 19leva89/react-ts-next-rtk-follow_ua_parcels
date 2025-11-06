import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HomeView } from './_components/home-view'

const HomePage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<HomeView />
			</div>

			<Footer />
		</>
	)
}

export default HomePage
