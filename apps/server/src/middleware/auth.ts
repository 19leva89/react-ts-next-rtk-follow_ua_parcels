import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

import { prisma } from '../utils/client.js'

const auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.headers.authorization?.split(' ')[1]

		if (!token) {
			return res.status(401).json({ message: 'No token provided' })
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload

		const user = await prisma.user.findUnique({
			where: {
				id: decoded.id,
			},
		})

		if (!user) {
			return res.status(404).json({ message: 'Користувача не знайдено' })
		}

		req.user = user

		next()
	} catch {
		res.status(401).json({ msg: `Будь ласка, увійдіть, щоб продовжити` })
	}
}

export default auth
