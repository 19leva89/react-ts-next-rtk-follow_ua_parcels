import './style.css'

interface Props {
	status: string
	msg: string | null
}

export const Alert = ({ status = 'disabled', msg }: Props) => {
	return <div className={`alert alert--${status}`}>{msg}</div>
}

export const Loader = () => {
	return <div className='loader'></div>
}

export const Skeleton = () => {
	return (
		<div className='skeleton'>
			<div className='skeleton__item'></div>
			<div className='skeleton__item'></div>
			<div className='skeleton__item'></div>
		</div>
	)
}
