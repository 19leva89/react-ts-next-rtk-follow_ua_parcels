'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, Flex, Form, Space, Typography } from 'antd'

import { Paths } from '@/constants/paths'
import { Field } from '@/components/field'
import { ButtonAntd } from '@/components/button-antd'
import { selectUser } from '@/features/auth/authSlice'
import { MsgResponse } from '@/components/msg-response'
import { isErrorWithMsg } from '@/utils/is-error-with-msg'
import { FieldCheckbox } from '@/components/field-checkbox'
import { FieldPassword } from '@/components/field-password'
import { UserData, useLoginMutation } from '@/services/auth'

export const LoginView = () => {
	const router = useRouter()
	const user = useSelector(selectUser)

	const [loginUser] = useLoginMutation()
	const [msg, setMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	useEffect(() => {
		if (user) {
			router.push(Paths.home)
		}
	}, [router, user])

	const login = async (data: UserData) => {
		setMsg('')

		try {
			const res = await loginUser(data).unwrap()
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
			<Card title='Увійти' size='default' className='form__container'>
				<Form initialValues={{ remember: true }} onFinish={login}>
					<Field name='email' placeholder='Введіть ваш email' type='email' size='large' required={true} />

					<FieldPassword name='password' placeholder='Введіть ваш пароль' size='large' required={true} />

					<FieldCheckbox name='remember' valuePropName='checked' required={false}>
						Запам'ятати мене
					</FieldCheckbox>

					<Flex vertical gap='small' style={{ width: '100%' }}>
						<ButtonAntd htmlType='submit' type='primary' size='large' block>
							Увійти
						</ButtonAntd>
					</Flex>
				</Form>

				<Space direction='vertical' size='large' style={{ width: '100%' }}>
					<Typography.Text>
						Забули пароль? <Link href={Paths.recovery}>Відновити</Link>
					</Typography.Text>

					<MsgResponse msg={msg} type={msgType} />
				</Space>
			</Card>
		</main>
	)
}
