'use strict';
const { getRandom, randomDate } = require('../_helpers')
const moment = require('moment')
moment.suppressDeprecationWarnings = true;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Attendances',
      Array.from({ length: 10 }).map((_, index) => {
        const day = getRandom(1, 30)
        return {
          id: (index + 1) * 10 + 1,
          UserId: getRandom(1, 5) * 10 + 1,
          clockIn: randomDate(day, 8, 2),
          clockOut: randomDate(day, 17, 3),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
      ),
      {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Attendances', null, {})
  }
}
