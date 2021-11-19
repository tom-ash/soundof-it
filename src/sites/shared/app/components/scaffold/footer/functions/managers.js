const link_tracks = [
  { name: 'contactManager', track: 'visitor/contact' },
  { name: 'termsOfServiceManager', track: 'visitor/terms-of-service' },
  { name: 'cookiesPolicyManager', track: 'visitor/cookies-policy' },
  { name: 'privacySettingsManager', track: 'visitor/privacy-settings' },
  { name: 'privacyPolicyManager', track: 'visitor/privacy-policy' },
  { name: 'addPageManager', track: 'page/create' } 
]

const managers = {}

link_tracks.map(({ name, track  }) => {
  managers[name] = props => {
    const { links, langs, changeRoute, langHandler } = props
    const link = links && links[track]
    // const link = links[track] // Change to this.
    const href = link && link.url
    const hrefLang = langHandler(langs)
    const title = link && link.title
    const label = title
    const classNames = { container: 'link' }
    const onClick = () => changeRoute({ href })
    
    return { classNames, href, hrefLang, title, label, onClick }
  }
})

export default managers
