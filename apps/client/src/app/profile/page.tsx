import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProfileView } from './_components/profile-view'

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
