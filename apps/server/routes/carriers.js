const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth')
const { all } = require('../controllers/carriers')

// /api/carriers
router.get('/', all);

module.exports = router;