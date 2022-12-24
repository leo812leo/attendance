'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendane = sequelize.define('Attendane', {
    clockIn: DataTypes.DATE,
    clockOut: DataTypes.DATE
  }, {});
  Attendane.associate = function (models) {
    Attendane.belongsTo(models.User)
  };
  return Attendane;
};