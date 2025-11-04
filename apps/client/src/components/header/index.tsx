import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Track } from '@prisma/client'

import { Form } from 'antd'
import { Button } from '../button'
import { FieldTrack } from '../field-track'
import { MsgResponse } from '../msg-response'

import { Paths } from '../../paths'
import { useAddTrackMutation } from '../../app/services/tracks'
import { isErrorWithMsg } from '../../utils/is-error-with-msg'
import { logout, selectUser } from '../../features/auth/authSlice'
import { selectTrackNumber, setTrackNumber } from '../../features/tracks/tracksSlice'

import logo from './logo-v1-ua.svg'
import './style.css'

export const Header: React.FC = () => {
	const user = useSelector(selectUser)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const trackNumber = useSelector(selectTrackNumber)
	const [addTrack] = useAddTrackMutation()
	const [msg, setMsg] = React.useState('')
	const [msgType, setMsgType] = React.useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	const [activeTab, setActiveTab] = React.useState<string>('myTracks')

	const location = useLocation()
	const isTracksPage = location.pathname === '/tracks'

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
		navigate(Paths.home)
	}

	const handleNavLinkClick = (tab: string) => {
		setActiveTab(tab)
		localStorage.setItem('activeTab', tab)
	}

	return (
		<header>
			<section className='header'>
				<NavLink to={Paths.home}>
					<img className='header__logo' src={logo} alt='Follow UA Parcels - Best package tracking service' />
				</NavLink>

				<div className='header__first-line'>
					<Form onFinish={handleAddTrack}>
						<div className='input__group'>
							<FieldTrack
								className='field__input field__input--track validation field__input--slim'
								name='trackNumber'
								placeholder='RB191346302CN'
								type='text'
								value={trackNumber}
								onChange={handleTrackNumberChange}
							/>
							<Button className='button header__btn header__btn--ua-parcels button__slim' type='submit'>
								<span>Трек</span>
							</Button>
						</div>
					</Form>

					{user ? (
						<div className='header__account'>
							<span className='header__btn'>
								<NavLink to={Paths.profile} className='button header__btn button__primary button__slim'>
									Профіль
								</NavLink>

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
								<NavLink to={Paths.login} className='button header__btn button__primary button__slim'>
									Увійти
								</NavLink>

								<NavLink to={Paths.register} className='button header__btn button__transparent button__slim'>
									Зареєструватися
								</NavLink>
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
										<NavLink
											to={Paths.tracks}
											className='navbar__link--text'
											onClick={() => handleNavLinkClick('myTracks')}
										>
											Мої посилки
										</NavLink>
									</div>

									<div className='navbar__link'>
										<NavLink
											to={Paths.tracks}
											className='navbar__link--text'
											onClick={() => handleNavLinkClick('myTracksArchive')}
										>
											Архів
										</NavLink>
									</div>
								</>
							)}
						</div>

						<div className='navbar__link'>
							<NavLink
								to='/delivery-stats'
								className='button header__btn button__transparent navbar__link--text button__slim'
							>
								Час доставки
							</NavLink>
						</div>
					</>
				) : (
					<div className='navbar__link'>
						<NavLink
							to='/delivery-stats'
							className='button header__btn button__transparent navbar__link--text'
						>
							Час доставки
						</NavLink>
					</div>
				)}
			</nav>
		</header>
	)
}
