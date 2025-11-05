import './style.css'

interface Props {
	className: string
}

export const Divider = ({ className }: Props) => {
	return <div className={className}></div>
}
