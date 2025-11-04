import cors from 'cors'
import logger from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import express, { Express, NextFunction, Request, Response } from 'express'

import userRouter from './routes/user.route.js'
import trackRouter from './routes/track.route.js'
import carrierRouter from './routes/carrier.route.js'

interface AppError extends Error {
	status?: number
}

dotenv.config()

const app: Express = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/health', (_req: Request, res: Response) => {
	return res.status(200).json({
		status: 'ok',
		uptime: process.uptime(),
		timestamp: Date.now(),
	})
})

app.use('/api/user', userRouter)
app.use('/api/tracks', trackRouter)
app.use('/api/carriers', carrierRouter)

app.use((error: AppError, _req: Request, res: Response, _next: NextFunction) => {
	console.log(error)

	return res.status(error.status || 500).json({ message: error.message || 'Inter Server Error!' })
})

// Export for Vercel/serverless
export default app
