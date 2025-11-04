import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Field } from '../../components/field'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Card, Flex, Form } from 'antd'
import { ButtonAntd } from '../../components/button-antd'
import { isErrorWithMsg } from '../../utils/is-error-with-msg'
import { useAddTrackMutation } from '../../app/services/tracks'
import { Paths } from '../../paths'
import { Track } from '@prisma/client'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { MsgResponse } from '../../components/msg-response'

const TrackAddPage: React.FC = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const [addTrack] = useAddTrackMutation()
  const [msg, setMsg] = React.useState('')
  const [msgType, setMsgType] = React.useState<'success' | 'info' | 'warning' | 'error' | undefined>('info')

  React.useEffect(() => {
    if (!user) {
      navigate(Paths.login)
    }
  }, [navigate, user])

  const handleAddTrack = async (data: Track) => {
    setMsg('')

    try {
      const res = await addTrack(data).unwrap()
      setMsgType('success')
      setMsg(res.msg)

      navigate(Paths.tracks)
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
          <Card title="Створити нову посилку" size="default" className="form__container">
            <Form initialValues={{ remember: true }} onFinish={handleAddTrack}>
              <Field
                name="name"
                placeholder="Введіть назву вашої посилки"
                type="text"
                size="large"
                required={true}
              />

              <Field
                name="number"
                placeholder="Введіть ваш трек номер"
                type="text"
                size="large"
                required={true}
              />

              <Flex vertical gap="small" style={{ width: '100%' }}>
                <ButtonAntd htmlType="submit" type="primary" size="large" block>
                  Створити
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

export default TrackAddPage
