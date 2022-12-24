const express = require('express')
const router = express.Router()
const users = require('./modules/users')

//路由
router.use('/users', users)

module.exports = router
