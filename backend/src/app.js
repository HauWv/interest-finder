const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const cors = require('cors')
const helmet = require('helmet')

const mongooseConnection = require('./database-connection')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const interestsRouter = require('./routes/interests')
const projectsRouter = require('./routes/projects')
const accountsRouter = require('./routes/accounts')
const User = require('./models/user')

const app = express()

//use it as a middleware
app.use(
  cors({
    // enables request from any domain, not safe, further add the domain you want
    origin: true,
    // origin: https://frontend-blablablabla.run.app/
    // allows cookies
    credentials: true,
  })
)

if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
  /* eslint-disable-next-line */
  require('livereload')
    .createServer({ extraExts: ['pug'] })
    .watch([`${__dirname}/public`, `${__dirname}/views`])
}

app.set('trust proxy', 1)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())

app.use(
  session({
    secret: '***REMOVED***',
    store: new MongoStore({ mongooseConnection, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api',
      // allows multiple domains to access it
      sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'strict',
      // secure allows only https
      secure: process.env.NODE_ENV == 'production',
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.use(
  new FacebookStrategy(
    {
      clientID: '2500630653572714',
      clientSecret: '***REMOVED***',
      callbackURL: 'http://marketing.localhost/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user)
      })
    }
  )
)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount++
  next()
})

app.use('/api/', indexRouter)
app.use('/api/accounts', accountsRouter)
app.use('/api/users', usersRouter)
// app.use('/api/signup', signupRouter)
app.use('/api/interests', interestsRouter)
app.use('/api/projects', projectsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)

  res.send({
    status: err.status,
    message: err.message,
    stack: req.app.get('env') == 'development' ? err.stack : '',
  })
})
console.log("I'm alive")
module.exports = app
