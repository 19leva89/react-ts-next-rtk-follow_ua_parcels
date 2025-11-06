import { ErrorWithMsg } from '../types'

export const isErrorWithMsg = (error: unknown): error is ErrorWithMsg => {
	return (
		typeof error === 'object' &&
		error !== null &&
		'data' in error &&
		typeof (error as Record<string, unknown>).data === 'object'
	)
}
