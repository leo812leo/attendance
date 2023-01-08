'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [{
        employeeId: 'admin',
        password: bcrypt.hashSync('tiadmin', bcrypt.genSaltSync(10), null),
        name: 'admin',
        Ext: '',
        cellPhone: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        isAdmin: true,
        loginAttempts: 0
      }], {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { employeeId: 'admin' })
  }
};
