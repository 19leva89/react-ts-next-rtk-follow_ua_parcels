import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Loader } from '../../components/load'
import { MsgResponse } from '../../components/msg-response'

import { Paths } from '../../paths'
import { selectUser } from '../../features/auth/authSlice'
import { useEditTrackMutation, useGetTrackQuery } from '../../app/services/tracks'
import { isErrorWithMsg } from '../../utils/is-error-with-msg'

import { Flex } from 'antd'
import editIco from './../../img/tracks/edit-icon.svg'
import copyIco from './../../img/tracks/copy-icon.svg'
import saveIco from './../../img/tracks/save-icon.svg'
import saveGreenIco from './../../img/tracks/save-green-icon.svg'
import cancelIco from './../../img/tracks/cancel-icon.svg'
import circleIcon from './../../img/tracks/circle-icon.svg'
import squareIcon from './../../img/tracks/square-icon.svg'

const TrackPage: React.FC = () => {
	const navigate = useNavigate()
	const params = useParams<{ id: string }>()
	const user = useSelector(selectUser)
	const [editTrack] = useEditTrackMutation()
	const [msg, setMsg] = React.useState('')
	const [msgType, setMsgType] = React.useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')
	const { data, isLoading, refetch } = useGetTrackQuery(params.id || '')

	const [copySuccess, setCopySuccess] = React.useState(false)
	const [isEditing, setIsEditing] = React.useState(false)
	const [editedName, setEditedName] = React.useState<string | null>()

	React.useEffect(() => {
		if (!user) {
			navigate(Paths.login)
		}
	}, [navigate, user])

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		return <Navigate to={Paths.tracks} />
	}

	const handleCopyClick = async () => {
		try {
			await navigator.clipboard.writeText(data.number)
			setCopySuccess(true)

			// Сховати повідомлення "Скопійовано!" через 2 секунди
			setTimeout(() => {
				setCopySuccess(false)
			}, 2000)
		} catch (err) {
			console.error('Failed to copy to clipboard:', err)
		}
	}

	const handleEditClick = async () => {
		setEditedName(data.name)
		setIsEditing(true)
	}

	const handleSaveClick = async () => {
		setMsg('')

		try {
			const editedTrack = {
				...data,
				name: editedName || data.name,
			}
			const res = await editTrack(editedTrack).unwrap()
			setMsgType('success')
			setMsg(res.msg)

			setIsEditing(false)
			refetch()
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

	const handleCancelClick = () => {
		setIsEditing(false)
		setEditedName(data.name)
	}

	const handleGetInfoClick = async () => {
		// try {
		//   dispatchTrack({ type: TRACK_ACTION_TYPE.REQUEST })
		//   const token = getTokenSession()
		//   if (!token) {
		//     dispatchTrack({
		//       type: TRACK_ACTION_TYPE.ERROR,
		//       payload: 'Session token not found',
		//     })
		//     return
		//   }
		//   const baseUrl = BASE_URL
		//   const url = `/track-get-info/${trackNumber}`
		//   const res = await fetch(`${baseUrl}${url}`, {
		//     method: 'GET',
		//     headers: {
		//       'Content-Type': 'application/json',
		//       Authorization: token,
		//     },
		//   })
		//   if (res.ok) {
		//     const data = await res.json()
		//     // console.log("Data from server:", data);
		//     dispatchTrack({
		//       type: TRACK_ACTION_TYPE.SUCCESS,
		//       payload: data.tracks,
		//     })
		//     setTrackInfo(data.track)
		//   } else {
		//     dispatchTrack({
		//       type: TRACK_ACTION_TYPE.ERROR,
		//       payload: 'Failed to fetch track info',
		//     })
		//   }
		// } catch (err) {
		//   dispatchTrack({
		//     type: TRACK_ACTION_TYPE.ERROR,
		//     payload: `Error updating track name: ${err}`,
		//   })
		// }
	}

	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<main>
					<div className='track__container'>
						<section className='track__list'>
							<Flex vertical gap='small' style={{ width: '100%' }}>
								<MsgResponse msg={msg} type={msgType} />
							</Flex>
							<div className='track__header'>
								<div className='track__number'>
									<h1>Відправлення: {data.number}</h1>
									<img
										className='track__number--img'
										src={copyIco}
										alt='Copy'
										onClick={handleCopyClick}
										title='Копіювати трек-номер'
									/>
									{copySuccess && <img src={saveGreenIco} alt='Save' />}
								</div>

								<div className='track__title'>
									{isEditing ? (
										<>
											<h2 className='track__subtitle'>Назва:</h2>
											<input
												className='field__input field__input--slim field__input--narrow'
												name='name'
												type='text'
												value={editedName || ''}
												onChange={(e) => setEditedName(e.target.value)}
											/>
											<img
												className='track__number--img'
												src={saveIco}
												alt='Save'
												onClick={handleSaveClick}
												title='Зберегти'
											/>
											<img
												className='track__number--img'
												src={cancelIco}
												alt='Cancel'
												onClick={handleCancelClick}
												title='Скасувати'
											/>
										</>
									) : (
										<>
											<h2 className='track__subtitle'>Назва: {data.name}</h2>
											<img
												className='track__number--img'
												src={editIco}
												alt='Edit'
												onClick={handleEditClick}
												title='Редагувати назву'
											/>
										</>
									)}
								</div>

								<button className={`button button__primary `} type='submit' onClick={handleGetInfoClick}>
									Оновити
								</button>
							</div>

							<div className='track__info'>
								<div>Посилка в дорозі: 0</div>
								<div>Оновлена: 1 год</div>
								<div>Наступне оновлення: 12 год</div>
							</div>

							<div className='track__history'>
								{/* {trackInfo.track_info.latest_event && ( */}
								<div className='track__history--item'>
									<div>
										<div className='track__history--line-first'></div>
										<img className='track__history--icon' src={circleIcon} alt='Circle' />
										<div className='track__history--line'></div>
									</div>

									<div className='track__history--info active-info'>
										<span className='track__history--time active-history'>
											{/* {trackInfo.track_info.latest_event.time_raw.date &&
                          `${trackInfo.track_info.latest_event.time_raw.date} ,`}
                        {trackInfo.track_info.latest_event.time_raw.time &&
                          `${trackInfo.track_info.latest_event.time_raw.time}`} */}
										</span>
										<span className='track__history--content active-history'>
											{/* {trackInfo.track_info.latest_event.location &&
                          `${trackInfo.track_info.latest_event.location} ,`}
                        {trackInfo.track_info.latest_event.description &&
                          `${trackInfo.track_info.latest_event.description}`} */}
										</span>
									</div>
								</div>
								{/* )} */}

								{/* {trackInfo.track_info.tracking.providers.map((provider: Provider) =>
                  provider.events.slice(1).map((event: Event) => ( */}
								<div className='track__history--item '>
									<div>
										<div className='track__history--line track__history--line-last'></div>
										<img className='track__history--icon' src={squareIcon} alt='Square' />
										<div className='track__history--line track__history--line-last'></div>
									</div>

									<div className='track__history--info active-info'>
										{/* {event.time_raw.date || event.time_raw.time ? ( */}
										<span className='track__history--time active-history'>
											{/* {event.time_raw.date && `${event.time_raw.date}`}
                            {event.time_raw.time && `, ${event.time_raw.time}`} */}
										</span>
										{/* ) : null} */}

										{/* {event.location || event.description ? ( */}
										<span className='track__history--content active-history'>
											{/* {event.location && `${event.location}`}
                            {event.description && `, ${event.description}`} */}
										</span>
										{/* ) : null} */}
									</div>
								</div>
								{/* )),
                )} */}
							</div>
						</section>
					</div>
				</main>
			</div>

			<Footer />
		</>
	)
}

export default TrackPage
