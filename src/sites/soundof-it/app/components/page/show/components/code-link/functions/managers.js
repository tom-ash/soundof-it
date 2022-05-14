import React from 'react'
import prettifyDate from '../../../../../../../../shared/app/functions/time/prettify-date'

export const linkManager = props => {
  const {
    clientUrl,
    changeRoute,
    pathname,
    hrefLang,
    title,
    image,
    logo,
    modifiedOn
  } = props

  console.log(props)

  const classNames = { container: `code-link` }  
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='title-and-meta'>
        <div className='title'>
          {title}
        </div>
        <div className='last-updated-at'>
          {modifiedOn && prettifyDate({ date: modifiedOn })}
        </div>
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
