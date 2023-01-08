'use strict';
module.exports = (sequelize, DataTypes) => {
  const create - admin = sequelize.define('create-admin', {
    name: DataTypes.STRING
  }, {});
  create - admin.associate = function(models) {
    // associations can be defined here
  };
  return create - admin;
};