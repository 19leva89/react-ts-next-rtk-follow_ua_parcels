import { api } from './api'

export interface Carrier {
	id: number
	country_iso: number
	name: string
	url: string
}
export interface ListResponse<T> {
	page: number
	per_page: number
	total: number
	total_pages: number
	data: T[]
}

export const carriersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getCarriers: builder.query<ListResponse<Carrier>, number | void>({
			query: (page = 1) => `carriers?page=${page}`,
		}),
	}),
})

export const { useGetCarriersQuery } = carriersApi

export const {
	endpoints: { getCarriers },
} = carriersApi
