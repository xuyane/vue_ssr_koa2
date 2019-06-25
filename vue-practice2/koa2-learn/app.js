const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const m1 = require('./middleware/m1')
const m2 = require('./middleware/m2')
const m3 = require('./middleware/m3')
const koapv = require('./middleware/koa-pv')

// 引入
const mongoose = require('mongoose')
const dbConfig = require('./dbs/config')

const session = require('koa-generic-session')
const Redis = require('koa-redis')

const index = require('./routes/index')
const users = require('./routes/users')


// error handler
onerror(app)
// session加密處理
app.key = ['key','keyskeys']
app.use(session({
  store:new Redis()
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(m1())
app.use(m2())
app.use(m3())
app.use(koapv())

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// 连接数据库
mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
