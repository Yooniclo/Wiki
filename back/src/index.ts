import Koa, { Context } from 'koa' 
import Path from 'path'

const Router = require('koa-router')
const Cors = require('koa2-cors')
const Serve = require('koa-static')
const Sendfile = require('koa-sendfile')
const https = require('https')
const fs = require('fs')

const app = new Koa() 
const router = new Router()

app.use(Cors())
app.use(router.routes())
app.use(Serve(Path.join(__dirname, '../public')))

var config = {
    domain: 'littlehero.io',
    port: 4000,
    https: {
      options: {
        key: fs.readFileSync(Path.resolve(process.cwd(), 'src/ssl/privkey1.pem'), 'utf8').toString(),
        cert: fs.readFileSync(Path.resolve(process.cwd(), 'src/ssl/fullchain1.pem'), 'utf8').toString()
      }
    }
}

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
    app.listen(config.port, () => {
        console.log('server is listening to port 4000 on http')
    })
} else {
    let serverCallback = app.callback()
    let httpsServer = https.createServer(config.https.options, serverCallback)


    httpsServer.listen(config.port, () => {
        console.log('server is listening to port 4000 on https')
    })
}

app.use(async ctx => {
    await Sendfile(ctx, Path.join(__dirname, '../public/wiki/index.html'))
})
