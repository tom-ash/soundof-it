import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state.js'
import { instantScroll } from '../scrollers/instant-scroll'
import getRouteData from '../getters/route-data.js'
import getRouteByTrack from '../../../../shared/shared/functions/getters/route-by-track.js'
import routes from '../../../shared/constants/routes/routes.js'

export function changeRoute(track) {
  const { changeApp, changeRender } = this.props
  const route = getRouteByTrack({ track, routes })
  const { stateSetter } = route

  stateSetter && getRouteData(route).then(routeData => stateSetter.call(this, routeData))

  changeRender({ ...renderState, [track]: true, ...routeRenders[track] })
  changeApp({ shouldMatchRouteToRenderAndLanguage: true })
  instantScroll()
}
