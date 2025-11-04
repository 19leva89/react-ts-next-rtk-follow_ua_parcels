const express = require('express');
const router = express.Router();

const { login, register, registerConfirm, recovery, recoveryConfirm, newEmail, newPassword, current } = require('../controllers/users')
const { auth } = require('../middleware/auth')

// /api/user/login
router.post('/login', login);

// /api/user/register
router.post('/register', register);

// /api/user/register
router.post('/register-confirm', registerConfirm);

// /api/user/recovery
router.post('/recovery', recovery);

// /api/user/recovery-confirm
router.post('/recovery-confirm', recoveryConfirm);

//api/user/new-email
router.post('/new-email', auth, newEmail);

// /api/user/new-password
router.post('/new-password', auth, newPassword);

// /api/user/current
router.get('/current', auth, current);

module.exports = router;
