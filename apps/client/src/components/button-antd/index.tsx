import { ReactNode } from 'react'
import { Button, Form } from 'antd'

import './style.css'

interface Props {
	children: ReactNode
	htmlType: 'button' | 'submit' | 'reset' | undefined
	type: 'default' | 'link' | 'text' | 'primary' | 'dashed' | undefined
	size?: 'large' | 'middle' | 'small'
	ghost?: boolean
	danger?: boolean
	block?: boolean
	loading?: boolean
	disabled?: boolean
	shape?: 'default' | 'circle' | 'round' | undefined
	icon?: ReactNode
	className?: string
	onClick?: () => void
}

export const ButtonAntd = ({
	children,
	htmlType,
	type,
	size,
	ghost,
	danger,
	block,
	loading,
	disabled,
	shape,
	icon,
	className,
	onClick,
}: Props) => {
	return (
		<Form.Item>
			<Button
				htmlType={htmlType}
				type={type}
				size={size}
				className={className}
				ghost={ghost}
				danger={danger}
				block={block}
				loading={loading}
				disabled={disabled}
				shape={shape}
				icon={icon}
				onClick={onClick}
			>
				{children}
			</Button>
		</Form.Item>
	)
}
