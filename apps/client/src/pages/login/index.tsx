import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Paths } from '../../paths'
import { UserData, useLoginMutation } from '../../app/services/auth'
import { isErrorWithMsg } from '../../utils/is-error-with-msg'

import { Card, Flex, Form, Space, Typography } from 'antd'
import { Field } from '../../components/field'
import { FieldPassword } from '../../components/field-password'
import { FieldCheckbox } from '../../components/field-checkbox'
import { ButtonAntd } from '../../components/button-antd'
import { MsgResponse } from '../../components/msg-response'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [loginUser] = useLoginMutation()
  const [msg, setMsg] = React.useState('')
  const [msgType, setMsgType] = React.useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

  React.useEffect(() => {
    if (user) {
      navigate(Paths.home)
    }
  }, [navigate, user])

  const login = async (data: UserData) => {
    setMsg('')

    try {
      const res = await loginUser(data).unwrap()
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
          <Card title="Увійти" size="default" className="form__container">
            <Form initialValues={{ remember: true }} onFinish={login}>
              <Field name="email" placeholder="Введіть ваш email" type="email" size="large" required={true} />

              <FieldPassword name="password" placeholder="Введіть ваш пароль" size="large" required={true} />

              <FieldCheckbox name="remember" valuePropName="checked" required={false}>
                Запам'ятати мене
              </FieldCheckbox>

              <Flex vertical gap="small" style={{ width: '100%' }}>
                <ButtonAntd htmlType="submit" type="primary" size="large" block>
                  Увійти
                </ButtonAntd>
              </Flex>
            </Form>

            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Typography.Text>
                Забули пароль? <NavLink to={Paths.recovery}>Відновити</NavLink>
              </Typography.Text>

              <MsgResponse msg={msg} type={msgType} />
            </Space>
          </Card>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default LoginPage
