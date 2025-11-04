import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Paths } from '../../paths'
import { RegisterData, useRegisterMutation } from '../../app/services/auth'
import { isErrorWithMsg } from '../../utils/is-error-with-msg'

import { Card, Flex, Form, Space, Typography } from 'antd'
import { Field } from '../../components/field'
import { FieldPassword } from '../../components/field-password'
import { ButtonAntd } from '../../components/button-antd'
import { MsgResponse } from '../../components/msg-response'
import { FieldCheckbox } from '../../components/field-checkbox'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [registerUser] = useRegisterMutation()
  const [msg, setMsg] = React.useState('')
  const [msgType, setMsgType] = React.useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

  React.useEffect(() => {
    if (user) {
      navigate(Paths.home)
    }
  }, [navigate, user])

  const register = async (data: RegisterData) => {
    setMsg('')

    try {
      const res = await registerUser(data).unwrap()

      setMsgType('success')
      setMsg(res.msg)

      navigate(Paths.registerConfirm)
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
          <Card title="Реєстрація користувача" size="default" className="form__container">
            <Form initialValues={{ remember: true }} onFinish={register}>
              <Field name="name" placeholder="Введіть ваше Ім'я" type="text" size="large" required={true} />

              <Field name="email" placeholder="Введіть ваш email" type="email" size="large" required={true} />

              <FieldPassword name="password" placeholder="Введіть ваш пароль" size="large" required={true} />

              <FieldCheckbox name="checkbox" valuePropName="checked" required={true}>
                Приймаєте умови сервісу?
              </FieldCheckbox>

              <Flex vertical gap="small" style={{ width: '100%' }}>
                <ButtonAntd htmlType="submit" type="primary" size="large" block>
                  Зареєструватися
                </ButtonAntd>
              </Flex>
            </Form>

            <Space direction="vertical" size="large">
              <Typography.Text>
                Маєте акаунт? <NavLink to={Paths.login}>Увійти</NavLink>
              </Typography.Text>

              <Flex vertical gap="small" style={{ width: '100%' }}>
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
