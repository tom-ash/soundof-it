import 'react-app-polyfill/ie9';
import Express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import vhost from 'vhost'
import warsawleasePlRequestHandler from '../sites/warsawlease-pl/server/functions/request-handler.js'
import codeLumiHandleRequest from '../sites/codelumi/server/functions/request-handler.js'
import * as Sentry from '@sentry/node'

Sentry.init({
  dsn: "https://ac81f10d287d4659865d2571d7be7b45@o876363.ingest.sentry.io/5825795",
  tracesSampleRate: 1.0
})

function allowCompression (req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

const app = Express()
app.use(cookieParser())
app.use(compression({ filter: allowCompression }))

app.use(vhost(/^.*(codelumi).*$/, Express.static('dist/sites/codelumi/client')))
app.use(vhost(/^.*(codelumi).*$/, codeLumiHandleRequest))

app.use(vhost(/^.*(warsawlease).*$/, Express.static('dist/sites/warsawlease-pl/client')))
app.use(vhost(/^.*(warsawlease).*$/, warsawleasePlRequestHandler))

app.listen(process.env.PORT || 8080)
