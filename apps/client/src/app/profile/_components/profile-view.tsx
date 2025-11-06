'use client'

import { Card, Flex, Form } from 'antd'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Paths } from '@/constants/paths'
import { Field } from '@/components/field'
import { ButtonAntd } from '@/components/button-antd'
import { selectUser } from '@/features/auth/authSlice'
import { MsgResponse } from '@/components/msg-response'
import { isErrorWithMsg } from '@/utils/is-error-with-msg'
import { FieldPassword } from '@/components/field-password'
import { useNewEmailMutation, useNewPasswordMutation } from '@/services/auth'

export const ProfileView = () => {
	const router = useRouter()
	const user = useSelector(selectUser)

	const [emailUser] = useNewEmailMutation()
	const [passwordUser] = useNewPasswordMutation()
	const [emailMsg, setEmailMsg] = useState<string>('')
	const [passwordMsg, setPasswordMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	useEffect(() => {
		if (!user) {
			router.push(Paths.login)
		}
	}, [router, user])

	const changeEmail = async (data: { newEmail: string; password: string }) => {
		setEmailMsg('')

		try {
			const res = await emailUser(data).unwrap()

			setMsgType('success')
			setEmailMsg(res.msg)
		} catch (err) {
			const maybeError = isErrorWithMsg(err)

			if (maybeError) {
				setMsgType('warning')
				setEmailMsg(err.data.msg)
			} else {
				setMsgType('error')
				setEmailMsg('Не відома помилка')
			}
		}
	}

	const changePassword = async (data: { oldPassword: string; newPassword: string }) => {
		setPasswordMsg('')

		try {
			const res = await passwordUser(data).unwrap()

			setMsgType('success')
			setPasswordMsg(res.msg)
		} catch (err) {
			const maybeError = isErrorWithMsg(err)

			if (maybeError) {
				setMsgType('warning')
				setPasswordMsg(err.data.msg)
			} else {
				setMsgType('error')
				setPasswordMsg('Не відома помилка')
			}
		}
	}

	return (
		<main className='main__container'>
			<div className='profile__container'>
				<div className='menu__container'>
					<h1 className='form__title'>Налаштування користувача </h1>
					<div className='stub'></div>
				</div>

				<div className='wrapper__profile'>
					<Card title='Змінити email' size='default' className='form__container'>
						<Form initialValues={{ remember: true }} onFinish={changeEmail}>
							<Field
								name='newEmail'
								placeholder='Введіть ваш новий email'
								type='email'
								size='large'
								required={true}
							/>

							<FieldPassword name='password' placeholder='Введіть ваш пароль' size='large' required={true} />

							<Flex vertical gap='small' style={{ width: '100%' }}>
								<ButtonAntd htmlType='submit' type='primary' size='large' block>
									Зберегти Email
								</ButtonAntd>
							</Flex>
						</Form>

						<Flex vertical gap='small' style={{ width: '100%' }}>
							<MsgResponse msg={emailMsg} type={msgType} />
						</Flex>
					</Card>

					<Card title='Змінити пароль' size='default' className='form__container'>
						<Form initialValues={{ remember: true }} onFinish={changePassword}>
							<FieldPassword
								name='oldPassword'
								placeholder='Введіть ваш старий пароль'
								size='large'
								required={true}
							/>

							<FieldPassword
								name='newPassword'
								placeholder='Введіть ваш новий пароль'
								size='large'
								required={true}
							/>
							<Flex vertical gap='small' style={{ width: '100%' }}>
								<ButtonAntd htmlType='submit' type='primary' size='large' block>
									Зберегти пароль
								</ButtonAntd>
							</Flex>
						</Form>

						<Flex vertical gap='small' style={{ width: '100%' }}>
							<MsgResponse msg={passwordMsg} type={msgType} />
						</Flex>
					</Card>
				</div>
			</div>
		</main>
	)
}
