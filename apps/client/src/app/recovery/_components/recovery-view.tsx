'use client'

import { Card, Flex, Form } from 'antd'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Paths } from '@/constants/paths'
import { Field } from '@/components/field'
import { ButtonAntd } from '@/components/button-antd'
import { selectUser } from '@/features/auth/authSlice'
import { MsgResponse } from '@/components/msg-response'
import { isErrorWithMsg } from '@/lib/is-error-with-msg'
import { UserData, useRecoveryMutation } from '@/services/auth'

export const RecoveryView = () => {
	const router = useRouter()
	const user = useSelector(selectUser)

	const [recoveryUser] = useRecoveryMutation()
	const [msg, setMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	useEffect(() => {
		if (user) {
			router.push(Paths.home)
		}
	}, [router, user])

	const recovery = async (data: UserData) => {
		setMsg('')

		try {
			const res = await recoveryUser(data).unwrap()

			setMsgType('success')
			setMsg(res.msg)

			router.push(Paths.recoveryConfirm)
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
			<Card title='Відновлення паролю' size='default' className='form__container'>
				<Form initialValues={{ remember: true }} onFinish={recovery}>
					<Field name='email' placeholder='Введіть ваш email' type='email' size='large' required={true} />

					<Flex vertical gap='small' style={{ width: '100%' }}>
						<ButtonAntd htmlType='submit' type='primary' size='large' block>
							Відновити пароль
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
