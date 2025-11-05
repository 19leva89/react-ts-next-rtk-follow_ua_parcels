import { ReactNode } from 'react'

import btnImg from './btn-ua-parcels.svg'
import './style.css'

interface Props {
	type: 'submit' | 'reset' | 'button'
	disabled?: boolean
	className?: string
	children: ReactNode
}

export const Button = ({ type, disabled, className, children }: Props) => {
	return (
		<button type={type} disabled={disabled} className={className}>
			<img height='15px' src={btnImg} alt='Button' />
			{children}
		</button>
	)
}
