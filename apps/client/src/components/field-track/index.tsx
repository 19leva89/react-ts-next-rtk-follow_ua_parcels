import './style.css'

interface Props {
	type: string
	name: string
	placeholder: string
	value: string
	className?: string
	onChange: (value: string) => void
}

export const FieldTrack = ({ type, name, placeholder, value, className, onChange }: Props) => {
	return (
		<div className='field field__track'>
			<input
				className={className}
				name={name}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	)
}
