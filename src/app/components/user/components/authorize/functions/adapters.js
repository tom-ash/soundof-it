import { deleteCookie } from '../../../../../functions/cookie-handlers'

export function deauthorizeUser() {
  const { changeRoute, props } = this
  const { resetAuthorizeData } = props
  deleteCookie('UT')
  resetAuthorizeData({
    authorized: false,
    name: null,
    phoneVerified: null
  })
  changeRoute(null, 'signIn')
}