import { Form, Input } from 'antd'
import { NamePath } from 'antd/es/form/interface'

import styles from './style.module.css'

type Props = {
	name: string
	placeholder: string
	size: 'large' | 'middle' | 'small'
	required: boolean
	dependencies?: NamePath[]
}

export const FieldPassword: React.FC<Props> = ({
	name,
	placeholder,
	size,
	required = true,
	dependencies,
}) => {
	return (
		<Form.Item
			name={name}
			rules={[
				{ required: required, message: `Обов'язкове поле` },
				({ getFieldValue }) => ({
					validator(_, value) {
						if (!value) {
							return Promise.resolve()
						}

						if (name === 'confirmPassword') {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve()
							}
							return Promise.reject(new Error('Паролі повинні співпадати'))
						} else {
							if (value.length < 6) {
								return Promise.reject(new Error('Пароль повинен бути довше 6-ти символів'))
							}
							return Promise.resolve()
						}
					},
				}),
			]}
			hasFeedback={true}
			dependencies={dependencies}
		>
			<Input.Password placeholder={placeholder} size={size} />
		</Form.Item>
	)
}
