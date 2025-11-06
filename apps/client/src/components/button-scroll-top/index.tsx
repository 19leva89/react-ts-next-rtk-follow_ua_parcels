'use client'

import { useEffect, useState } from 'react'

import './style.css'

interface Props {
	className: string
}

export const ButtonScrollTop = ({ className }: Props) => {
	const [showButton, setShowButton] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY
			const screenHeight = window.innerHeight

			if (scrolled > screenHeight) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			{showButton && (
				<button type='button' onClick={scrollToTop} className={className}>
					<img src='/svg/scroll_top.svg' alt='Scroll top' />
				</button>
			)}
		</>
	)
}
