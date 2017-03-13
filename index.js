const path = require('path')
const koa = require('koa')
const logger = require('koa-logger')
const serve = require('koa-static')
const SERVER_PORT = 3000

const app = koa()
app.use(logger())
app.use(serve(path.join(__dirname, 'public')))

app.listen(SERVER_PORT, () => console.log(`Koa is listening on port ${SERVER_PORT}`))
