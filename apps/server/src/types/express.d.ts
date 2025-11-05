import { User } from '@repo/parcels-db'

declare global {
	namespace Express {
		interface Request {
			user?: User
		}
	}
}

export {}
