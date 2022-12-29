/* Necessary Package */
const express = require('express')
const router = express.Router()

/* Controller */
const userController = require('../controllers/userController')

/* authentication */
const authenticated = require('../middleware/auth')

/* users */
router.post('/users/login', userController.login)
router.post('/users', userController.register)
router.get('/users/:id', authenticated, userController.getStaff)

module.exports = router