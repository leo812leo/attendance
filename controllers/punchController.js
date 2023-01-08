const dayjs = require('dayjs')
const { where } = require('sequelize')
/* db */
const db = require('../models')
const { User, Attendance } = db

const punchController = {
  punch: async (req, res) => {
    try {
      console.log(req.user.id)
      // // get current user id
      // const userId = req.staff.id
      // // get current time
      // const now = dayjs()
      // const CurrentTime = dayjs().format('YYYY-MM-DDTHH:mm:ss')
      // const hour = now.format('HH:mm:ss')
      // // modify date to set the Day-changing time at 5:00 GMT
      // const date = now.add(-5, 'h').format('YYYY-MM-DD')
      // // check if already punch today
      // const punchInCheck = await Attendance.findOne({
      //   where: { date, UserId }
      // })
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = punchController