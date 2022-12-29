/* db */
const db = require('../models')
const { User } = db

/* Necessary Packages */
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.json({
          status: 'error',
          message: '信箱及密碼不可空白'
        })
      }
      const staff = await Staff.findOne({ where: { email } })
      // 檢查 user 是否存在
      if (!staff)
        return res
          .status(401)
          .json({ status: 'error', message: '信箱不存在！' })
      // 密碼是否正確
      if (!bcrypt.compareSync(password, staff.password)) {
        return res.status(401).json({ status: 'error', message: '密碼錯誤' })
      }
      // 簽發 token
      const payload = { id: user.id }
      const token = jwt.sign(payload, process.env.JWT_SECRET)
      return res.json({
        status: 'success',
        message: '登入成功!',
        token,
        staff: {
          id: staff.id,
          name: staff.name,
          email: staff.email
        }
      })
    } catch (err) {
      console.log(err)
    }
  },
}