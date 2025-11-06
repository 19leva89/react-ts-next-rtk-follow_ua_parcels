import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/app/store'
import { carriersApi } from '@/services/carriers'
import { Carrier, ListResponse } from '@/services/carriers'

export interface CarriersState {
	data: Carrier[]
	currentPage: number
	totalPages: number
	isLoading: boolean
	error: string | null
}

const initialState: CarriersState = {
	data: [],
	currentPage: 1,
	totalPages: 1,
	isLoading: false,
	error: null,
}

const slice = createSlice({
	name: 'carriers',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			carriersApi.endpoints.getCarriers.matchFulfilled,
			(state, action: PayloadAction<ListResponse<Carrier>>) => {
				state.data = action.payload.data
			},
		)
	},
})

export const { setCurrentPage } = slice.actions
export default slice.reducer

export const selectCarriers = (state: RootState) => state.carriers.data
