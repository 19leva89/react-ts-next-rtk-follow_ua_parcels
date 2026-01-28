import { createSlice } from '@reduxjs/toolkit'

import { Track } from '@/types'
import { RootState } from '@/app/store'
import { tracksApi } from '@/services/tracks'

export interface InitialState {
	tracks: Track[] | null
	number: string
}

const initialState: InitialState = {
	tracks: null,
	number: '',
}

const slice = createSlice({
	name: 'tracks',
	initialState,
	reducers: {
		setTrackNumber: (state, action) => {
			state.number = action.payload
		},
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addMatcher(tracksApi.endpoints.getAllTracks.matchFulfilled, (state, action) => {
			state.tracks = action.payload
		})
	},
})

export const { setTrackNumber, logout } = slice.actions
export default slice.reducer

export const selectTracks = (state: RootState) => state.tracks
export const selectTrackNumber = (state: RootState) => state.tracks.number
