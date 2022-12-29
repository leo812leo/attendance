function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zeroPad(num, places) {
  let zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

const moment = require('moment')
function randomDate(day, starthour, randomhour) {
  return (moment(`2013-12-${day} ${starthour}:00:00`).add(Math.random() * randomhour, 'hours')).format("YYYY-MM-DD HH:mm:ss")
}

function getUser(req) {
  return req.user
}

module.exports = {
  getUser,
  getRandom,
  zeroPad,
  randomDate
}