'use strict';
const { getRandom } = require('../_helpers')
const dayjs = require('dayjs');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Attendances',
      Array.from({ length: 10 }).map((_, index) => {
        const time = dayjs(`2023-${getRandom(1, 2)}-${getRandom(1, 15)}`)
        const clockIn = time.add(getRandom(5, 12), 'h')
        const clockOut = time.add(getRandom(12, 28), 'h')
        return {
          id: (index + 1) * 10 + 1,
          userId: getRandom(1, 5) * 10 + 1,
          date: time.format('YYYY-MM-DD'),
          clockIn: clockIn.format('YYYY-MM-DDTHH:mm:ss'),
          clockOut: clockOut.format('YYYY-MM-DDTHH:mm:ss'),
          createdAt: new Date(),
          updatedAt: new Date(),
          abnormal: false,
          workingHours: clockOut.diff(clockIn, 'h')
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
