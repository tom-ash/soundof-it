function openGraphProvider(openGraph) {
  let openGraphHtml = ''
  
  openGraph.map(({ name, value }) => {
    openGraphHtml += `<meta property="${name}" content="${value}" />`
  })

  return openGraphHtml
}

export default openGraphProvider
