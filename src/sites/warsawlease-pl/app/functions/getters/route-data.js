import { getAccessToken } from '../../components/user/components/authorize/components/tokens/functions/get-tokens.js'

function getRouteData({ url, route, requestType }) {
  const { changeApp } = this.props
  const { track, lang, pageName } = route
  const pageNameHeader = pageName ? { 'Page-Name': pageName } : {}

  changeApp({ routeDataSet: false })

  return fetch(API_URL + `/route_data`, {
    headers: {
      'Content-Type': 'application/json',
      'Type': requestType,
      'Access-Token': getAccessToken(),
      'Route-Url': url,
      'Track': track,
      'Lang': lang,
      ...pageNameHeader
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
}

export default getRouteData
