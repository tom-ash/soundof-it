import getPureUrl from '../../../shared/functions/getters/pure-url.js'
import getRouteByUrl from '../../../shared/functions/getters/route-by-url.js'
import getDevice from '../../../shared/functions/getters/device.js'
import getVisitorState from '../../../shared/functions/getters/visitor-state.js'

function genericRequestHandler({
  req, res,
  apiUrl,
  routes, tracks,
  appState, renderState,
  appRenderer
}) {
  const { cookies, originalUrl, headers } = req
  const url = getPureUrl(originalUrl)
  const route = getRouteByUrl({ url, routes })
  const device = getDevice(headers['user-agent'])
  const visitorState = getVisitorState(cookies)

  if (route) return (
    routeSender({
      res,
      apiUrl,
      route, url, device,
      appState, renderState, visitorState,
      appRenderer
    })
  )

  pageSender({
    res,
    apiUrl,
    url, device,
    appState, renderState, tracks, visitorState,
    appRenderer
  })
}

export default genericRequestHandler
