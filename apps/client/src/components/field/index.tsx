import { Form, Input } from 'antd'

import './style.css'

interface Props {
	name: string
	placeholder: string
	type: string
	size: 'large' | 'middle' | 'small'
	required: boolean
}

export const Field = ({ name, placeholder, type, size, required }: Props) => {
	return (
		<Form.Item name={name} rules={[{ required: required, message: `Обов'язкове поле` }]} shouldUpdate={true}>
			<Input placeholder={placeholder} type={type} size={size} />
		</Form.Item>
	)
}
