import { MouseEventHandler } from 'react'

import Cross from './cross.svg'
import './style.css'

type Props = {
	className: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	type: 'submit' | 'reset' | 'button'
	title: string
}

export const ButtonDelete: React.FC<Props> = ({ className, onClick, type, title }) => {
	return (
		<button className={className} onClick={onClick} type={type} title={title}>
			<img src={Cross} alt='Delete' />
		</button>
	)
}
