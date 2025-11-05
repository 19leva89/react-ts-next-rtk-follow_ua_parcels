import path from 'path'
import fs from 'fs/promises'
import { Request, Response } from 'express'

const getPaginatedData = (dataArray: any[], page: number, pageSize: number) => {
	const start = page * pageSize
	const end = start + pageSize
	return dataArray.slice(start, end)
}

/**
 * @route GET /api/carriers
 * @desc Get all carriers
 * @access Public
 */
const all = async (req: Request, res: Response) => {
	try {
		const filePath = path.resolve(process.cwd(), 'src/utils/api-carrier.all.json')

		const fileExists = await fs
			.access(filePath)
			.then(() => true)
			.catch(() => false)
		if (!fileExists) {
			return res.status(404).json({
				msg: 'File not found',
			})
		}

		const fileContent = await fs.readFile(filePath, 'utf-8')
		const apiCarriers = JSON.parse(fileContent)

		const page = typeof req.query.page === 'string' ? parseInt(req.query.page, 10) : 0
		const pageSize = typeof req.query.pageSize === 'string' ? parseInt(req.query.pageSize, 10) : 20
		const paginatedCarriers = getPaginatedData(apiCarriers, page, pageSize)

		if (paginatedCarriers.length === 0) {
			return res.status(200).json({
				data: [],
				total_pages: 0,
			})
		}

		const total_pages = Math.ceil(apiCarriers.length / pageSize)

		const responseCarriers = paginatedCarriers.map((apiCarrier) => ({
			id: apiCarrier.key,
			country_iso: apiCarrier._country_iso,
			name: apiCarrier._name,
			url: apiCarrier._url,
		}))

		return res.status(200).json({
			msg: 'Carriers loaded',
			data: responseCarriers,
			total_pages,
		})
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Невідома помилка'

		return res.status(400).json({
			msg: errorMessage,
		})
	}
}

export { all }
