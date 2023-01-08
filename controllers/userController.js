/* db */
const db = require('../models')
const { User } = db

/* Necessary Packages */
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  login: async (req, res) => {
    try {
      const { employeeId, password } = req.body
      if (!employeeId || !password) {
        return res.json({
          status: 'error',
          message: '員編及密碼不可空白'
        })
      }
      const staff = await User.findOne({ where: { employeeId } })
      // 檢查 user 是否存在
      if (!staff)
        return res
          .status(401)
          .json({ status: 'error', message: '員編不存在！' })
      // 密碼是否正確
      if (!bcrypt.compareSync(password, staff.password)) {
        return res.status(401).json({ status: 'error', message: '密碼錯誤' })
      }
      // 簽發 token
      const payload = { id: staff.id }
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
      return res.json({
        status: 'success',
        message: '登入成功!',
        token,
        user: {
          id: staff.id,
          name: staff.name,
          employeeId: staff.employeeId
        }
      })
    } catch (err) {
      return res.status(401).json({ status: 'error', message: err })
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {})
      if (!user) {
        return res.json({ status: 'error', message: 'no such user found' })
      } else {
        return res.json(user)
      }
    } catch (err) {
      console.log(err)
    }
  },
  getCurrentUser: (req, res) => {
    const { id, employeeId, name, isAdmin } =
      req.user
    return res.json({
      id,
      employeeId,
      name,
      isAdmin,
    })
  },
  register: async (req, res) => {
    try {
      // 資料不可為空白
      const { name, employeeId, password, checkPassword } = req.body
      if (!name || !employeeId || !password || !checkPassword) {
        return res.json({
          status: 'error',
          message: '所有欄位皆不可空白！'
        })
      }
      // 確認checkPassword、password相同
      if (checkPassword !== password) {
        return res.json({
          status: 'error',
          message: '密碼確認不符！'
        })
      }
      // 確認employeeId無重複
      const user = await User.findOne({ where: { employeeId } })
      if (user) {
        return res.json({
          status: 'error',
          message: 'employeeId 已重覆註冊！'
        })
      }
      if (name.length > 50 || password.length > 20) {
        return res.json({
          status: 'error',
          message: '字數超出上限！'
        })
      }
      // user
      await User.create({
        name,
        employeeId,
        password: bcrypt.hashSync(
          req.body.password,
          bcrypt.genSaltSync(10),
          null
        )
      })
      return res.status(200).json({ status: 'success', message: '註冊成功!' })
    } catch (err) {
      console.log(err)
    }
  },
}

module.exports = userController