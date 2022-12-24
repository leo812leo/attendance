'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    Ext: DataTypes.STRING,
    cellPhone: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Attendance)
  };
  return User;
};
