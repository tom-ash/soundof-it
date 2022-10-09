const centerMap = () => {
  // @ts-ignore
  const map = window.googleMap
  const options = { center: { lat: 52, lng: 19 }, zoom: 5.8 }
  map.setOptions(options)
}

export default centerMap
