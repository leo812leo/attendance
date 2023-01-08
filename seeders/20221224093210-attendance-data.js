'use strict';
const { getRandom } = require('../_helpers')
const dayjs = require('dayjs');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Attendances',
      Array.from({ length: 10 }).map((_, index) => {
        const time = dayjs(`2023-${getRandom(1, 2)}-${getRandom(1, 15)}`)
        return {
          id: (index + 1) * 10 + 1,
          UserId: getRandom(1, 5) * 10 + 1,
          date: time.format('YYYY-MM-DD'),
          clockIn: time.add(getRandom(5, 12), 'h').format('YYYY-MM-DDTHH:mm:ss'),
          clockOut: time.add(getRandom(12, 28), 'h').format('YYYY-MM-DDTHH:mm:ss'),
          createdAt: new Date(),
          updatedAt: new Date(),
          abnormal: false,
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
