import { Flex } from 'antd'
import Link from 'next/link'
import { Track } from '@repo/parcels-db'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Paths } from '@/constants/paths'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Loader } from '@/components/load'
import { ButtonDelete } from '@/components/button-delete'
import { MsgResponse } from '@/components/msg-response'
import { selectUser } from '@/features/auth/authSlice'
import { isErrorWithMsg } from '@/utils/is-error-with-msg'
import {
	useArchiveTrackMutation,
	useGetAllTracksQuery,
	useRemoveTrackMutation,
	useRestoreTrackMutation,
} from '@/services/tracks'

import plusIconBl from './../../img/tracks/plus-icon-bl.svg'
import hourglass100 from './../../img/tracks/hourglass-100-icon.svg'
import archiveIco from './../../img/tracks/archive-icon.svg'
import unarchiveIco from './../../img/tracks/unarchive-icon.svg'

const TracksPage = () => {
	const router = useRouter()
	const user = useSelector(selectUser)

	const [archiveTrack] = useArchiveTrackMutation()
	const [restoreTrack] = useRestoreTrackMutation()
	const [removeTrack] = useRemoveTrackMutation()
	const [msg, setMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	const { data, isLoading, refetch } = useGetAllTracksQuery()
	// console.log('data tracks:', data)

	useEffect(() => {
		if (!user) {
			router.push(Paths.login)
		}
	}, [router, user])

	const [activeTab, setActiveTab] = useState<string>(() => {
		// Використовуємо локальне сховище для отримання значення activeTab
		const storedActiveTab = localStorage.getItem('activeTab')
		return storedActiveTab || 'myTracks'
	})

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		router.push(Paths.home)

		return null
	}

	const handleTabClick = (tab: string) => {
		setActiveTab(tab)
		localStorage.setItem('activeTab', tab)
	}

	const handleArchive = async (data: Track) => {
		setMsg('')

		try {
			const res = await archiveTrack(data).unwrap()
			setMsgType('success')
			setMsg(res.msg)

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

	const handleRestore = async (data: Track) => {
		setMsg('')

		try {
			const res = await restoreTrack(data).unwrap()
			setMsgType('success')
			setMsg(res.msg)

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

	const handleDelete = async (id: string) => {
		setMsg('')

		try {
			const res = await removeTrack(id).unwrap()
			setMsgType('success')
			setMsg(res.msg)

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

	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<main>
					<div className='track__container'>
						<div className='tabs__adaptive'>
							<div className='tabs'>
								<button
									className={`tab ${activeTab === 'myTracks' ? 'tab__active' : ''}`}
									onClick={() => handleTabClick('myTracks')}
								>
									Мої посилки {activeTab === 'myTracks'}
								</button>

								<button
									className={`tab ${activeTab === 'myTracksArchive' ? 'tab__active' : ''}`}
									onClick={() => handleTabClick('myTracksArchive')}
								>
									Архів посилок {activeTab === 'myTracksArchive'}
								</button>
							</div>

							<div className='non__tab'>
								<p>Сортування:</p>
								<select>
									<option value='LAST_EVENT'>за датою останньої події</option>
									<option value='TRANSIT_TIME'>за часом в дорозі</option>
									<option value='DAYS_LEFT'>за контрольним терміном</option>
									<option value='CREATED'>за датою додавання</option>
									<option value='TITLE'>за алфавітом</option>
								</select>

								<div className='track__new'>
									<Link href={Paths.trackAdd} className='button button__transparent actions__btn'>
										<span className='track__new--icon'>
											<img className='icon-img' src={plusIconBl} alt='Нова' height='14px' />
											Нова
										</span>
									</Link>
								</div>
							</div>
						</div>

						<div className='track__list'>
							{data.map(({ id, userId, number, carrier, name, createDate, archived }) => {
								const track = { id, userId, number, carrier, name, createDate, archived }
								const key = `${id}-${userId}`

								return (activeTab === 'myTracks' && !archived) ||
									(activeTab === 'myTracksArchive' && archived) ? (
									<div className='track__item' key={key}>
										<div className='icon'>
											<img
												src={`img/carrier/${carrier || 'undefined'}.png`}
												alt={name}
												height='38px'
												width='38px'
											/>
										</div>

										<div className='title track__subtitle'>
											<p>{name}</p>
											<Link className='tracking__number' href={`/tracks/${id}`}>
												{number}
											</Link>
										</div>

										<div className='time'>
											{/* <p>{track_info.latest_event?.time_raw?.date}</p>
        <p className="muted">{track_info.latest_event?.time_raw?.time}</p> */}
										</div>

										<div className='checkpoint'>
											{/* <p className="checkpoint__status">{track_info.latest_event?.stage}</p>
        <p className="text__muted">{track_info.latest_event?.location}</p> */}
										</div>

										<div className='check'>
											<p className='next__check'>В дорозі: 0</p>
											<p className='last__check'>Перевіряли: 6 годин назад</p>
											<p className='next__check'>Наступна: через 19 годин</p>
										</div>

										<div className='actions'>
											<Link href='#' className='button button__transparent actions__btn'>
												<span className='actions__icon--hourglass'>
													<img src={hourglass100} alt='Годинник' height='14px' />
													<p>38</p>
												</span>
											</Link>

											{archived ? (
												<button
													className='button button__transparent actions__btn'
													onClick={() => handleRestore(track)}
													type='submit'
													title='Повернути із архіву'
												>
													<img className='track__number--img' src={unarchiveIco} alt='Unarchive' />
												</button>
											) : (
												<button
													className='button button__transparent actions__btn'
													onClick={() => handleArchive(track)}
													type='submit'
													title='Перемістити в архів'
												>
													<img className='track__number--img' src={archiveIco} alt='Archive' />
												</button>
											)}

											<ButtonDelete
												className='button button__transparent actions__btn'
												onClick={() => handleDelete(id)}
												type='submit'
												title='Видалити'
											/>
										</div>
									</div>
								) : null
							})}
							<Flex vertical gap='small' style={{ width: '100%' }}>
								<MsgResponse msg={msg} type={msgType} />
							</Flex>
						</div>
					</div>
				</main>
			</div>

			<Footer />
		</>
	)
}

export default TracksPage
