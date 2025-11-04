import { Router } from 'express'

import {
	login,
	register,
	registerConfirm,
	recovery,
	recoveryConfirm,
	newEmail,
	newPassword,
	current,
} from '../controllers/users.js'
import auth from '../middleware/auth.js'

const router: Router = Router()

// /api/user/login
router.post('/login', login)

// /api/user/register
router.post('/register', register)

// /api/user/register
router.post('/register-confirm', registerConfirm)

// /api/user/recovery
router.post('/recovery', recovery)

// /api/user/recovery-confirm
router.post('/recovery-confirm', recoveryConfirm)

//api/user/new-email
router.post('/new-email', auth, newEmail)

// /api/user/new-password
router.post('/new-password', auth, newPassword)

// /api/user/current
router.get('/current', auth, current)

export default router
