const express = require('express')
const router = express.Router()
const db = require('../../models')
const User = db.User

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.create({ name, email, password })
    .then(user => res.redirect('/'))
})

module.exports = router
