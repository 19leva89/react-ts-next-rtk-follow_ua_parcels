import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, Flex, Form, Space, Typography } from 'antd'

import { Paths } from '@/constants/paths'
import { RegisterData, useRegisterMutation } from '@/services/auth'
import { isErrorWithMsg } from '@/utils/is-error-with-msg'
import { Field } from '@/components/field'
import { FieldPassword } from '@/components/field-password'
import { ButtonAntd } from '@/components/button-antd'
import { MsgResponse } from '@/components/msg-response'
import { FieldCheckbox } from '@/components/field-checkbox'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { selectUser } from '@/features/auth/authSlice'

const RegisterPage = () => {
	const router = useRouter()
	const user = useSelector(selectUser)

	const [registerUser] = useRegisterMutation()
	const [msg, setMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	useEffect(() => {
		if (user) {
			router.push(Paths.home)
		}
	}, [router, user])

	const register = async (data: RegisterData) => {
		setMsg('')

		try {
			const res = await registerUser(data).unwrap()

			setMsgType('success')
			setMsg(res.msg)

			router.push(Paths.registerConfirm)
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

				<main className='main__container'>
					<Card title='Реєстрація користувача' size='default' className='form__container'>
						<Form initialValues={{ remember: true }} onFinish={register}>
							<Field name='name' placeholder="Введіть ваше Ім'я" type='text' size='large' required={true} />

							<Field name='email' placeholder='Введіть ваш email' type='email' size='large' required={true} />

							<FieldPassword name='password' placeholder='Введіть ваш пароль' size='large' required={true} />

							<FieldCheckbox name='checkbox' valuePropName='checked' required={true}>
								Приймаєте умови сервісу?
							</FieldCheckbox>

							<Flex vertical gap='small' style={{ width: '100%' }}>
								<ButtonAntd htmlType='submit' type='primary' size='large' block>
									Зареєструватися
								</ButtonAntd>
							</Flex>
						</Form>

						<Space direction='vertical' size='large'>
							<Typography.Text>
								Маєте акаунт? <Link href={Paths.login}>Увійти</Link>
							</Typography.Text>

							<Flex vertical gap='small' style={{ width: '100%' }}>
								<MsgResponse msg={msg} type={msgType} />
							</Flex>
						</Space>
					</Card>
				</main>
			</div>

			<Footer />
		</>
	)
}

export default RegisterPage
