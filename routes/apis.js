/* Necessary Package */
const express = require('express')
const router = express.Router()

/* Controller */
const userController = require('../controllers/userController')

/* authentication */
const authenticated = require('../middleware/auth')

/* users */
router.post('/users/login', userController.login)
router.get('/users/:id', authenticated, userController.getUser)
router.get('/getCurrentUser', authenticated, userController.getCurrentUser)
// router.post('/users', userController.register)

module.exports = router