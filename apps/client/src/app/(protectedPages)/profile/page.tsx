import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { ProfileView } from './_components/profile-view'

export const metadata = constructMetadata({ title: 'Profile' })

const ProfilePage = () => {
	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<ProfileView />
			</div>

			<Footer />
		</>
	)
}

export default ProfilePage
