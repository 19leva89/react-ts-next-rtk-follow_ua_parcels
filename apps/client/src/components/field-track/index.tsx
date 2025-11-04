import './style.css'

type Props = {
	className: string
	name: string
	placeholder: string
	type: string
	value: string
	onChange: (value: string) => void
}

export const FieldTrack: React.FC<Props> = ({ className, name, placeholder, type, value, onChange }) => {
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
