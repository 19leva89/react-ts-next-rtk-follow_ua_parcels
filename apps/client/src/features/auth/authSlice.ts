import { createSlice } from '@reduxjs/toolkit'

import { User } from '@/types'
import { RootState } from '@/app/store'
import { authApi } from '@/services/auth'

export interface InitialState {
	user: (User & { token: string; msg: string }) | null
	isAuthenticated: boolean
}

const initialState: InitialState = {
	user: null,
	isAuthenticated: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
				state.user = action.payload
				state.isAuthenticated = true
			})
			.addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
				state.user = action.payload
				state.isAuthenticated = true
			})
			.addMatcher(authApi.endpoints.newPassword.matchFulfilled, (state, action) => {
				state.user = action.payload
				state.isAuthenticated = true
			})
			.addMatcher(authApi.endpoints.newEmail.matchFulfilled, (state, action) => {
				state.user = action.payload
				state.isAuthenticated = true
			})
			.addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
				state.user = action.payload
				state.isAuthenticated = true
			})
	},
})

export const { logout } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated
export const selectUser = (state: RootState) => state.auth.user
