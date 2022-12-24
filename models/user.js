'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.STRING,
    userid: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    Ext: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};