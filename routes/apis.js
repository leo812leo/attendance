/* Necessary Package */
const express = require('express')
const router = express.Router()

/* Controller */
const userController = require('../controllers/userController')
const punchController = require('../controllers/punchController')

/* authentication */
const authenticated = require('../middleware/auth')

/* users */
router.post('/users/login', userController.login)
router.get('/users/:id', authenticated, userController.getUser)
router.get('/getCurrentUser', authenticated, userController.getCurrentUser)
// router.post('/users', userController.register)


/* punch  */
router.get('/punch', authenticated, punchController.punch)


module.exports = router