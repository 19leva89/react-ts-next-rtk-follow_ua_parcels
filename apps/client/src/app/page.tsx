import Link from 'next/link'
import { Form } from 'antd'
import { Track } from '@repo/parcels-db'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/button'
import { FieldTrack } from '@/components/field-track'
import { MsgResponse } from '@/components/msg-response'
import { Paths } from '@/constants/paths'
import { useAddTrackMutation } from '@/services/tracks'
import { useGetCarriersQuery } from '@/services/carriers'
import { selectTrackNumber, setTrackNumber } from '@/features/tracks/tracksSlice'
import { isErrorWithMsg } from '@/utils/is-error-with-msg'

import logo from './../../img/logo-v1-ua.svg'

const HomePage = () => {
	const dispatch = useDispatch()
	const trackNumber = useSelector(selectTrackNumber)

	const [addTrack] = useAddTrackMutation()
	const [msg, setMsg] = useState<string>('')
	const [page, setPage] = useState<number>(0)
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	const { data: carriers } = useGetCarriersQuery(page)

	const autoPageChange = () => {
		if (carriers?.total_pages !== undefined) {
			const randomPage = Math.floor(Math.random() * carriers.total_pages)
			setPage(randomPage)
		}
	}

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

	useEffect(() => {
		autoPageChange()
	}, [])

	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<main>
					<section className='tracking'>
						<h1 className='preform'>Глобальне відстеження посилок</h1>

						<img
							className='main__logo'
							src={logo}
							alt='Follow UA Parcels - package delivery tracking service'
						/>

						<div className='tracking__form'>
							<Form onFinish={handleAddTrack}>
								<strong>
									<label className='tracking__form--label' htmlFor=''>
										Відстеження вашого відправлення:
										<MsgResponse msg={msg} type={msgType} />
									</label>
								</strong>

								<div className='tracking__form--input'>
									<FieldTrack
										className='field__input field__input--track validation field__input--fat'
										name='number'
										placeholder='Номер відстеження'
										type='text'
										value={trackNumber}
										onChange={handleTrackNumberChange}
									/>

									<Button className={'button header__btn header__btn--ua-parcels button__fat'} type='submit'>
										<span>Трек</span>
									</Button>
								</div>
							</Form>

							<p>
								Номер відстеження – це унікальний ідентифікатор вашої посилки, який дозволяє відслідковувати
								її та отримувати інформацію про її місцезнаходження. Наш сервіс надсилає повідомлення про
								зміну статусу посилки на електронну пошту та через <Link href={Paths.profile}>Telegram </Link>
								після <Link href={Paths.register}>реєстрації.</Link>
							</p>
						</div>
					</section>

					<section className='carrier'>
						<div className='carrier__title'>
							Ми можемо відслідковувати посилки, надіслані такими службами доставки:
						</div>

						<ul className='carrier__list'>
							{carriers?.data.slice(0, 18).map(({ id, name, url }) => (
								<li className='carrier__item' key={id}>
									<Link href={url} className='carrier__name'>
										<img src={`img/carrier/${id}.png`} width='24' alt={name} />
										<span className='carrier__text'>{name}</span>
									</Link>
								</li>
							))}
						</ul>

						<div className='carrier__btn--show-all'>
							<Link href={Paths.carriers} className='button header__btn button__transparent'>
								Подивитись всі служби
							</Link>
						</div>
					</section>
				</main>
			</div>

			<Footer />
		</>
	)
}

export default HomePage
