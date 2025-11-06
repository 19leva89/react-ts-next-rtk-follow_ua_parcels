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
import { isErrorWithMsg } from '@/utils/is-error-with-msg'
import { FieldPassword } from '@/components/field-password'
import { UserData, useRecoveryConfirmMutation } from '@/services/auth'

export const RecoveryConfirmView = () => {
	const router = useRouter()
	const user = useSelector(selectUser)

	const [recoveryConfirmUser] = useRecoveryConfirmMutation()
	const [msg, setMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	useEffect(() => {
		if (user) {
			router.push(Paths.home)
		}
	}, [router, user])

	const recoveryConfirm = async (data: UserData) => {
		setMsg('')

		try {
			const res = await recoveryConfirmUser(data).unwrap()

			setMsgType('success')
			setMsg(res.msg)

			router.push(Paths.home)
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
			<Card title='Зміна пароля' size='default' className='form__container'>
				<Form onFinish={recoveryConfirm}>
					<Field name='email' placeholder='Введіть ваш email' type='email' size='large' required={true} />

					<Field name='code' placeholder='Введіть ваш код' type='number' size='large' required={true} />

					<FieldPassword
						name='newPassword'
						placeholder='Введіть ваш новий пароль'
						size='large'
						required={true}
					/>

					<Flex vertical gap='small' style={{ width: '100%' }}>
						<ButtonAntd htmlType='submit' type='primary' size='large' block>
							Змінити пароль
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
