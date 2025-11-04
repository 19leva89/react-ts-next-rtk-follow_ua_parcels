import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../../paths'
import { UserData, useRecoveryConfirmMutation } from '../../app/services/auth'
import { isErrorWithMsg } from '../../utils/is-error-with-msg'

import { Card, Flex, Form } from 'antd'
import { Field } from '../../components/field'
import { FieldPassword } from '../../components/field-password'
import { ButtonAntd } from '../../components/button-antd'
import { MsgResponse } from '../../components/msg-response'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'

const RecoveryConfirmPage: React.FC = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [recoveryConfirmUser] = useRecoveryConfirmMutation()
  const [msg, setMsg] = React.useState('')
  const [msgType, setMsgType] = React.useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

  React.useEffect(() => {
    if (user) {
      navigate(Paths.home)
    }
  }, [navigate, user])

  const recoveryConfirm = async (data: UserData) => {
    setMsg('')

    try {
      const res = await recoveryConfirmUser(data).unwrap()

      setMsgType('success')
      setMsg(res.msg)

      navigate(Paths.home)
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
      <div className="content__wrapper">
        <Header />

        <main className="main__container">
          <Card title="Зміна пароля" size="default" className="form__container">
            <Form onFinish={recoveryConfirm}>
              <Field name="email" placeholder="Введіть ваш email" type="email" size="large" required={true} />

              <Field name="code" placeholder="Введіть ваш код" type="number" size="large" required={true} />

              <FieldPassword
                name="newPassword"
                placeholder="Введіть ваш новий пароль"
                size="large"
                required={true}
              />

              <Flex vertical gap="small" style={{ width: '100%' }}>
                <ButtonAntd htmlType="submit" type="primary" size="large" block>
                  Змінити пароль
                </ButtonAntd>
              </Flex>
            </Form>

            <Flex vertical gap="small" style={{ width: '100%' }}>
              <MsgResponse msg={msg} type={msgType} />
            </Flex>
          </Card>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default RecoveryConfirmPage
