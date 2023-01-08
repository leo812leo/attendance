'use strict';
const { getRandom } = require('../_helpers')
const dayjs = require('dayjs');
const { TIME } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Attendances',
      Array.from({ length: 10 }).map((_, index) => {
        const time = Date(`2022-${getRandom(11, 12)}-${getRandom(1, 30)}`)
        return {
          id: (index + 1) * 10 + 1,
          UserId: getRandom(1, 5) * 10 + 1,
          date: time,
          clockIn: (dayjs(time).add(getRandom(5, 12), 'h')).toDate(),
          clockOut: (dayjs(time).add(getRandom(12, 28), 'h')).toDate(),
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
