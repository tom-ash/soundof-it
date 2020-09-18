export function renderPage({
  html,
  css,
  preloadedState,
  scriptTags,
  title,
  description,
  url,
  announcementUrl,
  noIndex,
  openGraph
}) {

  const canonical = announcementUrl ? announcementUrl : `${CLIENT_URL}/${url}`

  return `
    <!doctype html>
    <html>
      <head>
        ${noIndex ? '<meta name="robots" content="noindex">' : ''}
        ${openGraph ? openGraph : ''}
        <link rel="canonical" href="${canonical}">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>${title}</title>
        <meta name="description" content="${description}">
        <style type="text/css">${[...css].join('')}</style>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&text=1234567890msqm&display=swap"
          rel="stylesheet"
          onload="this.media='all'"
        >
      </head>
      <body>
        ${html}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        ${scriptTags}
      </body>
    </html>
  `
}
