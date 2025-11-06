import { ReactNode } from 'react'

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
			<img height='15px' src='/svg/btn-ua-parcels.svg' alt='Button' />
			{children}
		</button>
	)
}
