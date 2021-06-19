import React from 'react'
import Link from '../components/link/link.js'
import urlify from '../../../../../../../../../shared/shared/functions/transformers/routes/urlify.js'

const commonTags = ['h1', 'h2', 'h3', 'div', 'p']

const jsonToJsxParser = props => {
  const { jsonBody, jsonMeta, clientUrl, changeRoute, customNodeParser } = props

  const jsx = jsonBody.map(function(node, index) {
    const nodeTag = node.t || 'p'
    const nodeContent = node.c
    const attrs = nodeTag === 'h2' ? { id: urlify(nodeContent) } : (node.a || {})

    if (nodeTag === 'picture') return <img src={node.url} loading='lazy' key={index} />
    if (commonTags.indexOf(nodeTag) !== -1) return React.createElement(nodeTag, { ...attrs, ...{ key: index } }, nodeContent)
    if (nodeTag === 'link') return <Link key={index} {...{ clientUrl, changeRoute, nodeContent }}/>
    if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>

    return customNodeParser({ clientUrl, nodeTag, nodeContent, attrs, changeRoute, index, jsonMeta })
  })

  return jsx
}

export default jsonToJsxParser