import { User } from '@prisma/client'
import { api } from './api'

export type UserData = Omit<User, 'id'>
export type RegisterData = Omit<User, 'id'> & { confirmPassword: string }
type ResponseData = User & { token: string; msg: string }

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<ResponseData, UserData>({
			query: (userData) => ({
				url: '/user/login',
				method: 'POST',
				body: userData,
			}),
		}),
		register: builder.mutation<ResponseData, UserData>({
			query: (userData) => ({
				url: '/user/register',
				method: 'POST',
				body: userData,
			}),
		}),
		registerConfirm: builder.mutation<ResponseData, UserData>({
			query: (userData) => ({
				url: '/user/register-confirm',
				method: 'POST',
				body: userData,
			}),
		}),
		recovery: builder.mutation<ResponseData, UserData>({
			query: (userData) => ({
				url: '/user/recovery',
				method: 'POST',
				body: userData,
			}),
		}),
		recoveryConfirm: builder.mutation<ResponseData, UserData>({
			query: (userData) => ({
				url: '/user/recovery-confirm',
				method: 'POST',
				body: userData,
			}),
		}),
		newPassword: builder.mutation<ResponseData, { oldPassword: string; newPassword: string }>({
			query: (passwordData) => ({
				url: '/user/new-password',
				method: 'POST',
				body: passwordData,
			}),
		}),
		newEmail: builder.mutation<ResponseData, { newEmail: string; password: string }>({
			query: (emailData) => ({
				url: '/user/new-email',
				method: 'POST',
				body: emailData,
			}),
		}),
		current: builder.query<ResponseData, void>({
			query: () => ({
				url: '/user/current',
				method: 'GET',
			}),
		}),
	}),
})

export const {
	useLoginMutation,
	useRegisterMutation,
	useRegisterConfirmMutation,
	useRecoveryMutation,
	useRecoveryConfirmMutation,
	useNewPasswordMutation,
	useNewEmailMutation,
	useCurrentQuery,
} = authApi
export const {
	endpoints: { login, register, registerConfirm, recovery, recoveryConfirm, newPassword, newEmail, current },
} = authApi
