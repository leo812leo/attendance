const dayjs = require('dayjs')
const { where } = require('sequelize')
const { toTWtime } = require('../_helpers')
/* db */
const db = require('../models')
const { User, Attendance } = db

const punchController = {
  punch: async (req, res) => {
    try {
      // get current user id
      const userId = req.user.id
      // get current time
      const currenttime = dayjs()
      // modify date to set the Day-changing time at 5:00 GMT
      const date = (currenttime.subtract(5, 'h')).format('YYYY-MM-DD')
      // check if already punch today
      const colckInCheck = await Attendance.findOne({
        where: { date, userId }
      })
      console.log(colckInCheck)
      // if already punch today, then punch out
      if (colckInCheck) {
        const inTime = dayjs(punchInCheck.createdAT)
        const outTime = dayjs(currentTime)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = punchController