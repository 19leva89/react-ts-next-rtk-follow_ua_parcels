import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CarriersView } from './_components/carriers-view'

const CarriersPage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<CarriersView />
			</div>

			<Footer />
		</>
	)
}

export default CarriersPage
