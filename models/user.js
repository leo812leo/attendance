'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Attendance)
    }
  }
  User.init(
    {
      employeeId: DataTypes.STRING,
      password: DataTypes.STRING,
      Ext: DataTypes.STRING,
      cellPhone: DataTypes.STRING,
      name: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      loginAttempts: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}