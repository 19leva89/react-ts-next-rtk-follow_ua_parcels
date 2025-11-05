import Link from 'next/link'

import appleLogo from './apple-logo.svg'
import googleLogo from './google-logo.svg'

import './style.css'

export const SocialLogin = () => {
	return (
		<>
			<h4 className='social__login'>Увійти як користувач</h4>

			<p className='social__links'>
				<Link href='/auth/oauth/google'>
					<img className='social__button social__button--google' src={googleLogo} alt='Google' />
				</Link>

				<Link href='/auth/oauth/apple'>
					<img className='social__button social__button--apple' src={appleLogo} alt='Apple' />
				</Link>
			</p>
		</>
	)
}
