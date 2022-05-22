const buildAnchor = matchArray => {
  let properties = ''
  let text

  matchArray.map(dataPair => {
    const [key, value] = dataPair.split(': ')

    if (key !== 'text') {
      properties += ` ${key}="${value}"`
    } else {
      text = value
    }
  })

  if (properties.indexOf('target') === -1) {
    properties += ' target="_blank"'
  }

  return (
    `<a ${properties}>${text}</a>`
  )
}

export default buildAnchor
