'use client'

import { Form } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import { Track } from '@repo/parcels-db'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname, useRouter } from 'next/navigation'

import { Paths } from '@/constants/paths'
import { Button } from '@/components/button'
import { FieldTrack } from '@/components/field-track'
import { MsgResponse } from '@/components/msg-response'
import { useAddTrackMutation } from '@/services/tracks'
import { isErrorWithMsg } from '@/lib/is-error-with-msg'
import { logout, selectUser } from '@/features/auth/authSlice'
import { selectTrackNumber, setTrackNumber } from '@/features/tracks/tracksSlice'

import './style.css'

export const Header = () => {
	const router = useRouter()
	const pathname = usePathname()
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const trackNumber = useSelector(selectTrackNumber)

	const [addTrack] = useAddTrackMutation()
	const [msg, setMsg] = useState<string>('')
	const [activeTab, setActiveTab] = useState<string>('myTracks')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	const isTracksPage = pathname === Paths.tracks

	const handleTrackNumberChange = (value: string) => {
		dispatch(setTrackNumber(value))
	}

	const handleAddTrack = async (data: Track) => {
		setMsg('')

		try {
			const res = await addTrack({ ...data, number: trackNumber }).unwrap()
			setMsgType('success')
			setMsg(res.msg)
		} catch (err) {
			const maybeError = isErrorWithMsg(err)

			if (maybeError) {
				setMsgType('warning')
				setMsg(err.data.msg)
			} else {
				setMsgType('error')
				setMsg('Не відома помилка')
			}
		}
	}

	const onLogoutClick = () => {
		dispatch(logout())
		localStorage.removeItem('token')
		router.push(Paths.home)
	}

	const handleLinkClick = (tab: string) => {
		setActiveTab(tab)
		localStorage.setItem('activeTab', tab)
	}

	return (
		<header>
			<section className='header'>
				<Link href={Paths.home}>
					<img
						src='/svg/logo-v1-ua.svg'
						alt='Follow UA Parcels - Best package tracking service'
						className='header__logo'
					/>
				</Link>

				<div className='header__first-line'>
					<Form onFinish={handleAddTrack}>
						<div className='input__group'>
							<FieldTrack
								type='text'
								name='trackNumber'
								placeholder='RB191346302CN'
								value={trackNumber}
								onChange={handleTrackNumberChange}
								className='field__input field__input--track validation field__input--slim'
							/>
							<Button className='button header__btn header__btn--ua-parcels button__slim' type='submit'>
								<span>Трек</span>
							</Button>
						</div>
					</Form>

					{user ? (
						<div className='header__account'>
							<span className='header__btn'>
								<Link href={Paths.profile} className='button header__btn button__primary button__slim'>
									Профіль
								</Link>

								<form action='' method='' className='' onSubmit={onLogoutClick}>
									<button className='button header__btn button__transparent button__slim' type='submit'>
										<svg
											width='15'
											height='15'
											fill='none'
											viewBox='0 0 15 15'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g clipPath='url(#clip0_67_4)'>
												<path d='M8.4375 11.25V13.125H1.875V1.875H8.4375V3.75H10.3125V0H0V15H10.3125V11.25H8.4375ZM5.625 9.37359V5.62359H11.25V3.74859L15 7.49859L11.25 11.2486V9.37359H5.625Z' />
											</g>
										</svg>
										Вийти
									</button>
								</form>
							</span>
						</div>
					) : (
						<div className='header__account'>
							<span className='header__btn'>
								<Link href={Paths.login} className='button header__btn button__primary button__slim'>
									Увійти
								</Link>

								<Link href={Paths.register} className='button header__btn button__transparent button__slim'>
									Зареєструватися
								</Link>
							</span>
						</div>
					)}
				</div>
			</section>

			<MsgResponse msg={msg} type={msgType} />

			<nav className='navbar'>
				{user ? (
					<>
						<div className='navbar__menu'>
							{!isTracksPage && (
								<>
									<div className='navbar__link'>
										<Link
											href={Paths.tracks}
											className='navbar__link--text'
											onClick={() => handleLinkClick('myTracks')}
										>
											Мої посилки
										</Link>
									</div>

									<div className='navbar__link'>
										<Link
											href={Paths.tracks}
											className='navbar__link--text'
											onClick={() => handleLinkClick('myTracksArchive')}
										>
											Архів
										</Link>
									</div>
								</>
							)}
						</div>

						<div className='navbar__link'>
							<Link
								href='/delivery-stats'
								className='button header__btn button__transparent navbar__link--text button__slim'
							>
								Час доставки
							</Link>
						</div>
					</>
				) : (
					<div className='navbar__link'>
						<Link
							href='/delivery-stats'
							className='button header__btn button__transparent navbar__link--text'
						>
							Час доставки
						</Link>
					</div>
				)}
			</nav>
		</header>
	)
}
