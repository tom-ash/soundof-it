import React from 'react'
import RenderNode from '../../render-node'

const Section = props => {
  const {
    appName,
    jsonBody,
    jsonMeta,
    clientUrl,
    changeRoute,
    buildUrl,
    device,
    isAdmin,
    lang,
    langHandler,
    className,
    element,
    st: style
  } = props

  const body = jsonBody.map((node, index) => {
    const nodeProps = {
      ...props,
      key: index,
      node,
      index,
      sectionBody: jsonBody
    }
    
    return <RenderNode {...nodeProps} />
  })

  if (!element) return body

  const section = React.createElement(
    element,
    { className, style },
    body
  )

  return section
}

export default Section
