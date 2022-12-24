// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const routes = require('./routes')
const session = require('express-session')


app.use(routes)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})