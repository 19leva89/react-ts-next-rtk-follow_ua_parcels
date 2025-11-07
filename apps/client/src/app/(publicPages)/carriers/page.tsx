import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { CarriersView } from './_components/carriers-view'

export const metadata = constructMetadata({ title: 'Carriers' })

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
