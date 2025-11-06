'use client'

import { Card, Flex, Form } from 'antd'
import { Track } from '@repo/parcels-db'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Paths } from '@/constants/paths'
import { Field } from '@/components/field'
import { ButtonAntd } from '@/components/button-antd'
import { selectUser } from '@/features/auth/authSlice'
import { useAddTrackMutation } from '@/services/tracks'
import { MsgResponse } from '@/components/msg-response'
import { isErrorWithMsg } from '@/lib/is-error-with-msg'

export const TrackAddView = () => {
	const router = useRouter()
	const user = useSelector(selectUser)

	const [addTrack] = useAddTrackMutation()
	const [msg, setMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	useEffect(() => {
		if (!user) {
			router.push(Paths.login)
		}
	}, [router, user])

	const handleAddTrack = async (data: Track) => {
		setMsg('')

		try {
			const res = await addTrack(data).unwrap()
			setMsgType('success')
			setMsg(res.msg)

			router.push(Paths.tracks)
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
		<main className='main__container'>
			<Card title='Створити нову посилку' size='default' className='form__container'>
				<Form initialValues={{ remember: true }} onFinish={handleAddTrack}>
					<Field
						name='name'
						placeholder='Введіть назву вашої посилки'
						type='text'
						size='large'
						required={true}
					/>

					<Field
						name='number'
						placeholder='Введіть ваш трек номер'
						type='text'
						size='large'
						required={true}
					/>

					<Flex vertical gap='small' style={{ width: '100%' }}>
						<ButtonAntd htmlType='submit' type='primary' size='large' block>
							Створити
						</ButtonAntd>
					</Flex>
				</Form>

				<Flex vertical gap='small' style={{ width: '100%' }}>
					<MsgResponse msg={msg} type={msgType} />
				</Flex>
			</Card>
		</main>
	)
}
