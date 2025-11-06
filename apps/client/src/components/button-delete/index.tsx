import { MouseEventHandler } from 'react'

import './style.css'

interface Props {
	type: 'submit' | 'reset' | 'button'
	title: string
	className: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ButtonDelete = ({ type, title, className, onClick }: Props) => {
	return (
		<button type={type} title={title} onClick={onClick} className={className}>
			<img src='/svg/cross.svg' alt='Delete' />
		</button>
	)
}
