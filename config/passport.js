//必要套件
const passport = require('passport')
// DB
const db = require('../models')
const { User } = db
// JWT
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy


let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = process.env.JWT_SECRET

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, done) {
  try {
    User.findByPk(jwt_payload.id)
      .then((user) => {
        if (!user) return done(null, false)
        return done(null, user)
      })
  } catch (err) {
    return done(err, false)
  }
})
passport.use(strategy)

module.exports = passport
