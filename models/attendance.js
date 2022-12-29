'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      // define association here
      Attendance.belongsTo(models.User)
    }
  }
  Attendance.init(
    {
      UserId: DataTypes.INTEGER,
      clockIn: DataTypes.DATE,
      clockOut: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Attendance'
    }
  )
  return Attendance
}