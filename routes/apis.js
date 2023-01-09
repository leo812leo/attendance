/* Necessary Package */
const express = require('express')
const router = express.Router()

/* Controller */
const userController = require('../controllers/userController')
const punchController = require('../controllers/punchController')

/* authentication */
const authenticated = require('../middleware/auth')
const QRcode = require('../middleware/QRcode')

/* users */
router.post('/users/login', userController.login)
router.get('/users/:id', authenticated, userController.getUser)
router.post('/users', userController.register)

// router.post('/users', userController.register)

/* others */
router.get('/getCurrentUser', authenticated, userController.getCurrentUser)
router.get('/QRcode/:userid', QRcode, authenticated, punchController.punch)
/* punch  */
router.get('/punch', authenticated, punchController.punch)


module.exports = router