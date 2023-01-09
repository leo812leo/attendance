/* db */
const db = require('../models')
const { User } = db
const helpers = require('../_helpers')

const QRcode = async (req, res, next) => {
  try {
    const userId = req.params.userid
    const user = await User.findOne({ where: { id: userId } })
    const { employeeId } = user
    req.headers.QRcode = true
    req.headers.authorization = `Bearer ${req.query.token}`
    return next()
  } catch (err) {
    return res.status(401).json({ status: 'error', message: err })
  }
}

module.exports = QRcode