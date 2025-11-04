import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import auth from './../features/auth/authSlice'
import tracks from '../features/tracks/tracksSlice'
import carriers from '../features/carriers/carriersSlice'
import { api } from './services/api'
import { listenerMiddleware } from '../middleware/auth'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth,
		tracks,
		carriers,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
	},

	// Додаємо підтримку Redux DevTools, для відстеження та аналізу стану Redux-стейту
	devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
