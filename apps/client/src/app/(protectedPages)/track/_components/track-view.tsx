'use client'

import { Flex } from 'antd'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams, redirect } from 'next/navigation'

import { Paths } from '@/constants/paths'
import { Loader } from '@/components/load'
import { selectUser } from '@/features/auth/authSlice'
import { MsgResponse } from '@/components/msg-response'
import { isErrorWithMsg } from '@/lib/is-error-with-msg'
import { useEditTrackMutation, useGetTrackQuery } from '@/services/tracks'

export const TrackView = () => {
	const params = useParams<{ id: string }>()
	const user = useSelector(selectUser)

	const [editTrack] = useEditTrackMutation()
	const [msg, setMsg] = useState<string>('')
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [editedName, setEditedName] = useState<string | null>()
	const [copySuccess, setCopySuccess] = useState<boolean>(false)
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	const { data, isLoading, refetch } = useGetTrackQuery(params.id || '')

	useEffect(() => {
		if (!user) {
			redirect(Paths.login)
		}
	}, [user])

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		redirect(Paths.tracks)
	}

	const handleCopyClick = async () => {
		try {
			await navigator.clipboard.writeText(data.number)
			setCopySuccess(true)

			// Hide "Copied!" message after 2 seconds
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
								src='/svg/tracks/copy-icon.svg'
								alt='Copy'
								title='Копіювати трек-номер'
								onClick={handleCopyClick}
								className='track__number--img'
							/>
							{copySuccess && <img src='/svg/tracks/save-green-icon.svg' alt='Save' />}
						</div>

						<div className='track__title'>
							{isEditing ? (
								<>
									<h2 className='track__subtitle'>Назва:</h2>
									<input
										name='name'
										type='text'
										value={editedName || ''}
										onChange={(e) => setEditedName(e.target.value)}
										className='field__input field__input--slim field__input--narrow'
									/>
									<img
										title='Зберегти'
										src='/svg/tracks/save-icon.svg'
										alt='Save'
										onClick={handleSaveClick}
										className='track__number--img'
									/>
									<img
										title='Скасувати'
										src='/svg/tracks/cancel-icon.svg'
										alt='Cancel'
										onClick={handleCancelClick}
										className='track__number--img'
									/>
								</>
							) : (
								<>
									<h2 className='track__subtitle'>Назва: {data.name}</h2>
									<img
										title='Редагувати назву'
										src='/svg/tracks/edit-icon.svg'
										alt='Edit'
										onClick={handleEditClick}
										className='track__number--img'
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
								<img src='/svg/tracks/circle-icon.svg' alt='Circle' className='track__history--icon' />
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
								<img src='/svg/tracks/square-icon.svg' alt='Square' className='track__history--icon' />
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
	)
}
