import { Form, Input } from 'antd'

import './style.css'

type Props = {
  name: string
  placeholder: string
  type: string
  size: 'large' | 'middle' | 'small'
  required: boolean
}

export const Field: React.FC<Props> = ({ name, placeholder, type, size, required }) => {
  return (
    <Form.Item name={name} rules={[{ required: required, message: `Обов'язкове поле` }]} shouldUpdate={true}>
      <Input placeholder={placeholder} type={type} size={size} />
    </Form.Item>
  )
}
