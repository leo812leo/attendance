'use strict';
const { getRandom, zeroPad } = require('../_helpers')

const bcrypt = require('bcryptjs')
const userNameList = ['Allen', 'Benjamin', 'Chris', 'Drake', 'Edward']

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      ['user1', 'user2', 'user3', 'user4', 'user5'].map((user, index) => ({
        id: (index + 1) * 10 + 1,
        employeeId: index,
        password: bcrypt.hashSync('titaner', bcrypt.genSaltSync(10), null),
        name: `${userNameList[index]}`,
        Ext: (zeroPad(getRandom(0, 9999), 4)).toString(),
        cellPhone: `09-${zeroPad(getRandom(0, 99999999), 8)}`,
        createdAt: new Date(2021, getRandom(1, 12), index + 21),
        updatedAt: new Date()
      })),
      {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}