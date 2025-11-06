import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import { RootState } from '../app/store'
import { SERVER_URL } from '@/constants/server-url'

const baseQuery = fetchBaseQuery({
	baseUrl: `${SERVER_URL}/api`,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.user?.token || localStorage.getItem('token')

		if (token && token !== null) {
			headers.set('authorization', `Bearer ${token}`)
		}
	},
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	refetchOnMountOrArgChange: true,
	endpoints: () => ({}),
})
