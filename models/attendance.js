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
      userId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
      clockIn: DataTypes.DATE,
      clockOut: DataTypes.DATE,
      abnormal: DataTypes.BOOLEAN,
      workingHours: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Attendance'
    }
  )
  return Attendance
}