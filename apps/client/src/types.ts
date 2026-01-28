export type User = {
	id: string
	email: string
	password: string
	name: string
	isConfirmed: boolean
}

export type Track = {
	id: string
	userId: string
	number: string
	carrier: number
	name: string
	archived: boolean
	createdAt: string
	updatedAt: string
}

export type ErrorWithMsg = {
	status: number
	data: {
		msg: string
	}
}
