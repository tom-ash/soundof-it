import { removeOldPins } from './draw-pins'
import { setUpGoogleMaps } from '../../../../../functions/google-map-handler'

function handleScroll() {
  const {
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft,
    changeControl
  } = this.props

  const scrollTop = this.miniList.current.scrollTop

  if (scrollTop > miniListFarthestScrollTop + 100) {
    changeControl({ miniListFarthestScrollTop: scrollTop })
  }

  const scrollLeft = this.miniList.current.scrollLeft

  if (scrollLeft > miniListFarthestScrollLeft + 100) {
    changeControl({ miniListFarthestScrollLeft: scrollLeft })
  }
}

export function componentDidMount() {
  const {
    changeControl,
    changePostShowData,
    changePostRender
  } = this.props

  this.googleMapHandler(() => changeControl({ mapLoaded: true }))

  this.miniList.current.addEventListener('scroll', () => handleScroll.apply(this))

  changePostShowData({ name: 'welcome' })
  changePostRender({ show: true })
}

export function componentDidUpdate(prevProps) {
  const {
    loadMap: prevLoadMap,
    tileId: prevTileId,
    loadPins: prevLoadPins
  } = prevProps

  const {
    changeControl,
    loadMap,
    tileId,
    loadPins
  } = this.props

  if (this.shouldSetUpGoogleMaps()) changeControl({ loadMap: true })
  if (!prevLoadMap && loadMap) setUpGoogleMaps.call(this)

  if (this.shouldSetUpPins()) changeControl({ loadPins: true })
  if (!prevLoadPins && loadPins) this.drawPins()

  if (tileId && prevTileId !== tileId) this.fetchTile()
}

export function componentWillUnmount() {
  const {
    resetControl,
    resetInputs,
    resetData,
    changePostShowData,
    changePostRender
  } = this.props

  removeOldPins.call(this)

  console.log("HERE 1111")
  
  changePostRender({ show: false })
  changePostShowData({ name: null, body: null })
  resetControl()
  resetInputs()
  resetData()
}
