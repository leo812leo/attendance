const express = require('express')
const router = express.Router()
const users = require('./modules/users')
const admin = require('./modules/admin')

//路由
router.use('/users', users)
router.use('/admin', admin)

module.exports = router
