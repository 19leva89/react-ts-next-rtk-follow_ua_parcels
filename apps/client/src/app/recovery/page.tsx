import { Card, Flex, Form } from 'antd'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Paths } from '@/constants/paths'
import { isErrorWithMsg } from '@/utils/is-error-with-msg'
import { UserData, useRecoveryMutation } from '@/services/auth'
import { Field } from '@/components/field'
import { ButtonAntd } from '@/components/button-antd'
import { MsgResponse } from '@/components/msg-response'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { selectUser } from '@/features/auth/authSlice'

const RecoveryPage = () => {
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
		<>
			<div className='content__wrapper'>
				<Header />

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
			</div>

			<Footer />
		</>
	)
}

export default RecoveryPage
