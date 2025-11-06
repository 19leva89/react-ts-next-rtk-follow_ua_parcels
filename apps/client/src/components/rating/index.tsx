'use client'

import { useState } from 'react'

import './style.css'

interface Props {
	carrierId: number
	initialRating: number
}

export const Rating = ({ carrierId, initialRating }: Props) => {
	const [rating, setRating] = useState<number>(initialRating)

	const handleRatingChange = (value: number) => {
		setRating(value)

		// TODO: Add logic to save rating to database
	}

	return (
		<div className='rating_block'>
			{[5, 4, 3, 2, 1].map((value) => (
				<div key={`${carrierId}-rating-${value}`}>
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
				</div>
			))}
		</div>
	)
}
