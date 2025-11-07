'use client'

import { useState } from 'react'
import { Card, Flex, Form } from 'antd'
import { useRouter } from 'next/navigation'

import { Paths } from '@/constants/paths'
import { Field } from '@/components/field'
import { ButtonAntd } from '@/components/button-antd'
import { MsgResponse } from '@/components/msg-response'
import { isErrorWithMsg } from '@/lib/is-error-with-msg'
import { UserData, useRegisterConfirmMutation } from '@/services/auth'

export const RegisterConfirmView = () => {
	const router = useRouter()
	const [registerConfirmUser] = useRegisterConfirmMutation()

	const [msg, setMsg] = useState<string>('')
	const [msgType, setMsgType] = useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

	const registerConfirm = async (data: UserData) => {
		setMsg('')

		try {
			const res = await registerConfirmUser(data).unwrap()

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
			<Card title='Підтвердити аккаунт' size='default' className='form__container'>
				<Form onFinish={registerConfirm}>
					<Field name='email' placeholder='Введіть ваш email' type='email' size='large' required={true} />

					<Field name='code' placeholder='Введіть ваш код' type='number' size='large' required={true} />

					<Flex vertical gap='small' style={{ width: '100%' }}>
						<ButtonAntd htmlType='submit' type='primary' size='large' block>
							Підтвердити
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
