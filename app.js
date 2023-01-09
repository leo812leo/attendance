/* setting */
const PORT = process.env.PORT || 3000
// dotenv.config()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
/* necessary package */
// express
const express = require('express')
//cors
const cors = require('cors')
// passport
const passport = require('./config/passport')
// body-parser
const bodyParser = require('body-parser')
// methodOverride
const methodOverride = require('method-override')
// handlebars
const { engine } = require('express-handlebars')

/* app */
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())
app.use(methodOverride('_method'))
app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 設定 port
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

require('./routes')(app)

module.exports = app