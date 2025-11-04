import React from 'react'
import { useSelector } from 'react-redux'

import { selectUser } from '../../features/auth/authSlice'
import { useNewEmailMutation, useNewPasswordMutation } from '../../app/services/auth'

import { isErrorWithMsg } from '../../utils/is-error-with-msg'

import { Paths } from '../../paths'
import { Card, Flex, Form } from 'antd'
import { Field } from '../../components/field'
import { FieldPassword } from '../../components/field-password'
import { ButtonAntd } from '../../components/button-antd'
import { MsgResponse } from '../../components/msg-response'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

const ProfilePage: React.FC = () => {
	const navigate = useNavigate()
	const user = useSelector(selectUser)
	const [emailUser] = useNewEmailMutation()
	const [passwordUser] = useNewPasswordMutation()
	const [emailMsg, setEmailMsg] = React.useState('')
	const [passwordMsg, setPasswordMsg] = React.useState('')
	const [msgType, setMsgType] = React.useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	React.useEffect(() => {
		if (!user) {
			navigate(Paths.login)
		}
	}, [navigate, user])

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
		<>
			<div className='content__wrapper'>
				<Header />

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

									<FieldPassword
										name='password'
										placeholder='Введіть ваш пароль'
										size='large'
										required={true}
									/>

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
			</div>

			<Footer />
		</>
	)
}

export default ProfilePage
