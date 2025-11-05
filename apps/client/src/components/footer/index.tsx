import Link from 'next/link'

import { Paths } from '../../constants/paths'

import logo from './logo-footer-v1-ua.svg'
import './style.css'

export const Footer = () => {
	return (
		<footer>
			<div className='footer__main'>
				<div>
					<p className='footer__title'>Відстеження посилок</p>
					<ul className='footer__list'>
						<li>
							<Link href={Paths.home} className='footer__item'>
								Відстежити посилку
							</Link>
						</li>

						<li>
							<Link href='/china/aliexpress' className='footer__item'>
								Відстежити моє замовлення Aliexpress
							</Link>
						</li>

						<li>
							<Link href='/china/wish' className='footer__item'>
								Відстежити мій список бажань
							</Link>
						</li>

						<li>
							<Link href='/china' className='footer__item'>
								Відстежити мою посилку з Китаю
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<p className='footer__title'>Інформація</p>
					<ul className='footer__list'>
						<li>
							<Link href='/shop' className='footer__item'>
								Магазини
							</Link>
						</li>

						<li>
							<Link href='/delivery-stats' className='footer__item'>
								Прогноз термінів доставки
							</Link>
						</li>

						<li>
							<Link href={Paths.carriers} className='footer__item'>
								Служби доставки
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<p className='footer__title'>Послуги</p>
					<ul className='footer__list'>
						<li>
							<Link href='#' className='footer__item' target='_blank'>
								Додаток для iPhone та iPad
							</Link>
						</li>
						<li>
							<Link href='#' className='footer__item' target='_blank'>
								Додаток для Android
							</Link>
						</li>
						<li>
							<Link href='#' className='footer__item' target='_blank'>
								Бот для Telegram
							</Link>
						</li>
					</ul>
				</div>

				<div className='footer__copyright'>
					<img src={logo} alt='Відстеження поштових відправлень та посилок Follow UA Parcels' />

					<Link href='/support/contact-us' className='footer__item'>
						Контакти
					</Link>

					<div className='footer__item'>
						© <time dateTime='2024'>2024</time> Follow UA Parcels
					</div>
				</div>
			</div>
		</footer>
	)
}
