const origin = `${CLIENT_URL}/`

export function aboutManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}o-serwisie`, en: `${origin}about` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'O Serwisie', en: 'About' }),
    label: this.languageHandler('O Serwisie', 'About'),
    onClick: () => this.changePath({ showVisitorAbout: true }) //changeApp({ showVisitorAbout: true, showNotFound: false })
  }
}

export function contactManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}kontakt`, en: `${origin}contact` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Kontakt', en: 'Contact' }),
    label: this.languageHandler('Kontakt', 'Contact'),
    onClick: () => this.changePath({ showVisitorContact: true })
  }
}

export function termsOfServiceManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}regulamin`, en: `${origin}terms-of-service` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Regulamin', en: 'Terms and Conditions' }),
    label: this.languageHandler('Regulamin', 'Terms and Conditions'),
    onClick: () => changeApp({ showVisitorTermsOfService: true, showNotFound: false })
  }
}

export function cookiesPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}polityka-cookies`, en: `${origin}cookies-policy` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Polityka Cookies', en: 'Cookies Policy' }),
    label: this.languageHandler('Polityka Cookies', 'Cookies Policy'),
    onClick: () => changeApp({ showVisitorCookiesPolicy: true, showNotFound: false })
  }
}

export function privacyPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}polityka-prywatnosci`, en: `${origin}privacy-policy` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Polityka Prywatności', en: 'Privacy Policy' }),
    label: this.languageHandler('Polityka Prywatności', 'Privacy Policy'),
    onClick: () => changeApp({ showVisitorPrivacyPolicy: true, showNotFound: false })
  }
}

export function privacySettingsManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}ustawienia-prywatnosci`, en: `${origin}privacy-settings` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Ustawienia Prywatności', en: 'Privacy Settings' }),
    label: this.languageHandler('Ustawienia Prywatności', 'Privacy Settings'),
    onClick: () => changeApp({ showVisitorPrivacySettings: true, showNotFound: false })
  }
}
