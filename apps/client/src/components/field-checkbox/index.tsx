import { ReactNode } from 'react'
import { Checkbox, Form } from 'antd'

import './style.css'

interface Props {
	children: ReactNode
	name: string
	valuePropName: string
	required: boolean
	checked?: boolean
	defaultChecked?: boolean
}

export const FieldCheckbox = ({
	children,
	name,
	checked,
	defaultChecked,
	valuePropName,
	required,
}: Props) => {
	return (
		<Form.Item
			name={name}
			rules={[{ required: required, message: `Обов'язкове поле` }]}
			valuePropName={valuePropName}
			shouldUpdate={true}
		>
			<Checkbox checked={checked} defaultChecked={defaultChecked}>
				{children}
			</Checkbox>
		</Form.Item>
	)
}
