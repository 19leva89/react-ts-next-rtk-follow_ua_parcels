import { MouseEventHandler } from 'react'

import Cross from './cross.svg'
import './style.css'

interface Props {
	type: 'submit' | 'reset' | 'button'
	title: string
	className: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ButtonDelete = ({ type, title, className, onClick }: Props) => {
	return (
		<button type={type} title={title} className={className} onClick={onClick}>
			<img src={Cross} alt='Delete' />
		</button>
	)
}
