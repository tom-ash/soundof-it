import React from 'react'
import loadable from '@loadable/component'

const Header = loadable(() => import('./components/header/header'))
const List = loadable(() => import('../list/list.js'))
const Code = loadable(() => import('../code/code'))
const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const Image = loadable(() => import('./components/image/image'))
const PageIndexer = loadable(() => import('../../../../../index/components/page-indexer/page-indexer'))

const nodeParser = props => {
  const { node, index, clientUrl, changeRoute } = props

  const headerTags = ['h1', 'h2', 'h3', 'h4']
  const nodeTag = node.t

  if (!node) return null
  if (typeof node === 'string') return <Paragraph key={index} {...props} content={node} />
  if (headerTags.indexOf(nodeTag) !== -1) return <Header key={index} {...{...node, ...props}} />
  if (node.i) return <Image key={index} {...{...node.i, ...props}} />
  if (node.ul) return <List key={index} {...{ listNodes: node.ul, ...props}} />
  if (node.code) return <Code key={index} {...{...node, ...props}}/>
  
  if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>
  
  if (nodeTag === 'PageIndexer') return <PageIndexer {...{ ...props, key: index }} />

  return null
}

export default nodeParser
