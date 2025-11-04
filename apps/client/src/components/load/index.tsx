import './style.css'

type Props = {
	status: string
	msg: string | null
}

export const Alert: React.FC<Props> = ({ status = 'disabled', msg }) => {
	return <div className={`alert alert--${status}`}>{msg}</div>
}

export const Loader: React.FC = () => {
	return <div className='loader'></div>
}

export const Skeleton: React.FC = () => {
	return (
		<div className='skeleton'>
			<div className='skeleton__item'></div>
			<div className='skeleton__item'></div>
			<div className='skeleton__item'></div>
		</div>
	)
}
