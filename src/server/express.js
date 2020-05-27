import express from 'express'
import path from 'path'

const server = express()

const staticMiddleware = express.static('dist')
const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
)
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
// You must tell express to use webpackHotMiddleware after webpackDevMiddleware
// but before use staticMiddleware
server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)
server.use(staticMiddleware)


server.listen(8080, () => {
  console.log('listening on port 8080')
})
