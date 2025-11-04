import { Router } from 'express'

import { all } from '../controllers/carriers.js'

const router: Router = Router()

// /api/carriers
router.get('/', all)

export default router
