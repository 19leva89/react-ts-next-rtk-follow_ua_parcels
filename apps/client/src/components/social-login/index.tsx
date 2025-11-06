import Link from 'next/link'

import './style.css'

export const SocialLogin = () => {
	return (
		<>
			<h4 className='social__login'>Увійти як користувач</h4>

			<p className='social__links'>
				<Link href='/auth/oauth/google'>
					<img
						src='/svg/auth/google-logo.svg'
						alt='Google'
						className='social__button social__button--google'
					/>
				</Link>

				<Link href='/auth/oauth/apple'>
					<img src='/svg/auth/apple-logo.svg' alt='Apple' className='social__button social__button--apple' />
				</Link>
			</p>
		</>
	)
}
