'use client'

import Link from 'next/link'
import { useState } from 'react'
import * as isoCountries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'

import { Rating } from '@/components/rating'
import { Pagination } from '@/components/pagination'
import { useGetCarriersQuery } from '@/services/carriers'

export const CarriersView = () => {
	const [page, setPage] = useState<number>(0)

	const { data: carriers, isLoading } = useGetCarriersQuery(page)

	isoCountries.registerLocale(enLocale)

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	if (isLoading) {
		return <div>Loading</div>
	}

	if (!carriers?.data) {
		return <div>No carriers available</div>
	}

	return (
		<main>
			<section className='tracking'>
				<h1 className='preform'>Служби доставки</h1>
			</section>

			<section className='carrier'>
				<div className='carrier__title'>
					Ми можемо відслідковувати посилки, надіслані такими службами доставки:
				</div>

				<div>
					<ul className='carrier__list carrier__list--four-columns'>
						{carriers.data.map(({ id, country_iso, name, url }) => {
							const countryName = isoCountries.getName(country_iso, 'en', { select: 'alias' }) || ''

							return (
								<li key={id} className='carrier__item carrier__item--big'>
									<Link href={url} className='carrier__name'>
										<img src={`img/carrier/${id}.png`} width='70' alt={name} className='carrier__img' />
									</Link>

									<div className='carrier__info'>
										<Link href={url} className='carrier__name'>
											<span className='carrier__text'>{name}</span>
										</Link>

										<span className='carrier__text'>{countryName}</span>

										<Rating carrierId={id} initialRating={0} />
									</div>
								</li>
							)
						})}
					</ul>

					<Pagination
						onChangePage={handlePageChange}
						currentPage={carriers.page}
						totalPages={carriers.total_pages || 0}
					/>
				</div>
			</section>
		</main>
	)
}
