'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendane = sequelize.define('Attendane', {
    clockIn: DataTypes.DATE,
    clockOut: DataTypes.DATE
  }, {});
  Attendane.associate = function(models) {
    // associations can be defined here
  };
  return Attendane;
};