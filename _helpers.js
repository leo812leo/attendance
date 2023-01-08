function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zeroPad(num, places) {
  let zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function getUser(req) {
  return req.user
}

const dayjs = require('dayjs');
function toTWtime(day) {
  return day.add(dayjs().utcOffset(), 'minute')
}

module.exports = {
  getUser,
  getRandom,
  zeroPad,
  toTWtime
}