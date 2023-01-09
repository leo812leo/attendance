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
      const currentTime = dayjs()
      const formatCurrentTime = dayjs().format('YYYY-MM-DD  HH:mm:ss')
      // modify date to set the Day-changing time at 5:00 GMT
      const date = (currentTime.subtract(5, 'h')).format('YYYY-MM-DD')
      // check if already punch today
      const AttendanceData = await Attendance.findOne({
        where: { date, userId }
      })
      // if already punch today, then punch out
      if (AttendanceData) {
        const clockIn = dayjs(AttendanceData.clockIn) //+8:00
        const clockOut = toTWtime(currentTime)
        // calculate working hours
        const workingHours = clockOut.diff(clockIn, 'h')
        // if working hours less than 8
        if (workingHours < 8) {
          await Attendance.update(
            { clockOut: toTWtime(currentTime), workingHours, abnormal: true },
            { where: { userId, date } }
          )
          const response = {
            formatCurrentTime,
            status: 'success',
            message: 'clock out, working hours less than 8'
          }
          if (req.headers.QRcode) {
            res.render('index', { response })
          } else {
            return res.json(response)
          }

        }
        else { // if working hours more than 8
          await Punch.update(
            { colckOut: formatCurrentTime, workingHours, abnormal: false },
            { where: { userId, date } }
          )
          const response = {
            formatCurrentTime,
            status: 'success',
            message: 'Punch out successfully'
          }
          if (req.headers.QRcode) {
            res.render('index', { response })
          } else {
            return res.json(response)
          }
        }
      }
      else {  // if no punch record today, then punch in
        await Attendance.create({
          clockIn: toTWtime(currentTime),
          abnormal: true,
          date,
          userId: userId,
        })
        const response = { formatCurrentTime, status: 'success', message: 'clockIn in successfully' }
        if (req.headers.QRcode) {
          res.render('index', { response })
        } else {
          return res.json(response)
        }
      }
    } catch (err) {
      return res.status(401).json({ status: 'error', message: err })
    }
  }
}

module.exports = punchController