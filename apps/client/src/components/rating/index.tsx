import React from 'react'

import './style.css'

type Props = {
	carrierId: number
	initialRating: number
}

export const Rating: React.FC<Props> = ({ carrierId, initialRating }) => {
	const [rating, setRating] = React.useState(initialRating)

	const handleRatingChange = (value: number) => {
		setRating(value)
		// Логіка для збереження рейтингу у базі даних
	}

	return (
		<div className='rating_block'>
			{[5, 4, 3, 2, 1].map((value) => (
				<React.Fragment key={`${carrierId}-rating-${value}`}>
					<input
						name={`${carrierId}-rating`}
						value={value}
						id={`${carrierId}-rating-${value}`}
						type='radio'
						className='rating_input'
						checked={value === rating}
						onChange={() => handleRatingChange(value)}
					/>
					<label htmlFor={`${carrierId}-rating-${value}`} className='rating_label' />
				</React.Fragment>
			))}
		</div>
	)
}
