import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { changeUrl } from '../../../functions/routes/changers/change-url'
import { scrollToFragment } from '../../../functions/scrollers/scroll-to-fragment'
import { useLinks } from '../../../functions/store/use-links'
import { SVG } from '../svg/svg'

type LinkInterfaceProps =
  | {
      linkKey: string
      href?: string
      hrefLang?: Lang
      label?: React.ReactElement | string
      title?: string
      customClassNames?: string
    }
  | {
      href: string
      hrefLang?: Lang
      label?: React.ReactElement | string
      title?: string
      customClassNames?: string
    }

interface LinkInterface {
  (props: LinkInterfaceProps): React.ReactElement | null
}

export const Link: LinkInterface = props => {
  const { label: customLabel, href, hrefLang, title, customClassNames } = props
  const links = useLinks()
  const containerClassNames = customClassNames ? `${customClassNames} link` : 'link'
  const classNames = { container: containerClassNames }

  let linkProps

  if ('linkKey' in props) {
    const linkKey = props.linkKey
    const link = links[linkKey]
    if (!link) return null

    const label = customLabel || link.label
    const external = link.external

    if (external) {
      const { href } = link

      return (
        <a
          href={href}
          target='_blank'
        >
          {label}
        </a>
      )
    }

    const onClick = () => changeUrl({ ...link })

    const {
      href,
      hrefLang,
      title,
      icon,
    } = link

    linkProps = {
      href,
      hrefLang,
      title,
      label: icon ? <><SVG name={icon} />{label}</> : label,
      classNames,
      onClick
    }
  } else {
    const isAnchor = href && href.match(/^#.+$/)
    const onClick = () => (isAnchor ? scrollToFragment(href!) : changeUrl({ href }))

    linkProps = { href, hrefLang, label: customLabel, title, classNames, onClick }
  }

  return <ManagedLink {...linkProps} />
}
