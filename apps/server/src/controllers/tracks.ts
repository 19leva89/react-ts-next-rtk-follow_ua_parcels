import axios from 'axios'
import { Request, Response } from 'express'

import { prisma } from '../utils/client.js'

/**
 * @route GET /api/tracks
 * @desc Get all tracks for logged in user
 * @access Private
 */
const all = async (req: Request, res: Response) => {
	try {
		const userId = req.user.id

		const tracks = await prisma.track.findMany({
			where: {
				userId: userId,
			},
		})

		return res.status(200).json(tracks)
	} catch {
		res.status(500).json({ msg: `Не вдалося отримати треки` })
	}
}

/**
 * @route GET /api/tracks/:id
 * @desc Get track
 * @access Private
 */
const track = async (req: Request, res: Response) => {
	try {
		const { id } = req.params

		if (!req.user) {
			return res.status(401).json({ msg: 'Користувач не автентифікований' })
		}

		const track = await prisma.track.findUnique({
			where: {
				id: id,
				userId: req.user.id,
			},
		})

		if (!track) {
			return res.status(404).json({ msg: 'Трек не знайдено' })
		}

		return res.status(200).json(track)
	} catch (error) {
		console.error(error)
		res.status(500).json({ msg: `Не вдалося отримати трек` })
	}
}

/**
 * @route POST /api/tracks/add
 * @desc Add track
 * @access Private
 */
const add = async (req: Request, res: Response) => {
	try {
		const data = req.body
		if (!data.number) {
			return res.status(400).json({ msg: `Всі поля обов'язкові` })
		}

		if (!data.name) {
			data.name = 'Без назви'
		}

		// Отримання інформації про трек з 17track.net
		const trackResponse = await axios.request({
			method: 'POST',
			url: 'https://api.17track.net/track/v2.2/register',
			headers: {
				'content-type': 'application/json',
				'17token': process.env.API_KEY_17TRACK,
			},
			data: JSON.stringify([{ number: data.number, auto_detection: true }]),
		})

		const responseData = trackResponse.data

		const acceptedData = responseData?.data?.accepted?.[0]
		const rejectedData = responseData?.data?.rejected?.[0]

		if (acceptedData) {
			// Отримати значення carrier з прийнятого об'єкта
			const { carrier } = acceptedData

			// Викликати Track.create з отриманим значенням carrier
			const track = await prisma.track.create({
				data: {
					...data,
					carrier: carrier,
					userId: req.user.id,
				},
			})

			return res.status(201).json({
				track,
				msg: 'Трек успішно додано до відстеження',
			})
		} else if (rejectedData) {
			const { error } = rejectedData

			return res.status(400).json({
				msg: error.message,
			})
		} else {
			return res.status(500).json({
				msg: 'Помилка сервера 17track.net',
				error: responseData?.msg,
			})
		}
	} catch (err) {
		console.error(err)
		return res.status(500).json({
			msg: 'Помилка обробки запиту',
			error: err.msg,
		})
	}
}

/**
 * @route PUT /api/tracks/archive/:id
 * @desc Archive track
 * @access Private
 */
const archive = async (req: Request, res: Response) => {
	try {
		const data = req.body
		const id = data.id
		// console.log('data:', data)

		if (!data.number) {
			return res.status(400).json({ msg: `Всі поля обов'язкові` })
		}

		data.archived = true

		await prisma.track.update({
			where: {
				id: id,
			},
			data: data,
		})

		return res.status(200).json({ msg: `Трек перенесено до архіву` })
	} catch (error) {
		console.error(error)
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
 * @route POST /api/tracks/restore/:id
 * @desc Restore track from archive
 * @access Private
 */
const restore = async (req: Request, res: Response) => {
	try {
		const data = req.body
		const id = data.id
		// console.log('data:', data)

		if (!data.number) {
			return res.status(400).json({ msg: `Всі поля обов'язкові` })
		}

		data.archived = false

		await prisma.track.update({
			where: {
				id: id,
			},
			data: data,
		})

		return res.status(200).json({ msg: `Трек відновлено з архіву` })
	} catch (error) {
		console.error(error)
		res.status(500).json({ msg: `Щось пішло не так` })
	}
}

/**
 * @route DELETE /api/tracks/remove/:id
 * @desc Remove track
 * @access Private
 */
const remove = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		if (!id) {
			return res.status(400).json({ msg: 'Не вказано id' })
		}

		const track = await prisma.track.findUnique({
			where: {
				id: id,
			},
		})

		if (!track) {
			return res.status(400).json({ msg: 'Трек з вказаним ID не знайдено' })
		}
		const { number } = track

		// Запит на API 17track.net
		const trackResponse = await axios.request({
			method: 'POST',
			url: 'https://api.17track.net/track/v2.2/deletetrack',
			headers: {
				'content-type': 'application/json',
				'17token': process.env.API_KEY_17TRACK,
			},
			data: JSON.stringify([{ number: number }]),
		})

		const responseData = trackResponse.data

		const acceptedData = responseData?.data?.accepted?.[0]
		const rejectedData = responseData?.data?.rejected?.[0]

		if (acceptedData) {
			await prisma.track.delete({
				where: {
					id: id,
				},
			})

			return res.status(200).json({ msg: `Трек видалено` })
		} else if (rejectedData) {
			const { error } = rejectedData

			return res.status(400).json({
				msg: error.message,
			})
		} else {
			return res.status(500).json({
				msg: 'Помилка сервера 17track.net',
				error: responseData?.msg,
			})
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({
			msg: 'Помилка обробки запиту',
			error: err.msg,
		})
	}
}

/**
 * @route PUT /api/tracks/edit/:id
 * @desc Edit track
 * @access Private
 */
const edit = async (req: Request, res: Response) => {
	try {
		const data = req.body
		const id = data.id

		await prisma.track.update({
			where: {
				id: id,
			},
			data: data,
		})

		return res.status(200).json({ msg: `Трек оновлено` })
	} catch (error) {
		console.error(error)
		res.status(500).json({ msg: `Не вдалося редагування треку` })
	}
}

export { all, track, add, archive, restore, remove, edit }
