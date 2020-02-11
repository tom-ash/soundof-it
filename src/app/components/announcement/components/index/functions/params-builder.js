import { params } from '../../../constants/params'
import { allowedOrigins } from '../../../../../constants/allowed-origins'

export function paramsBuilder() {
  if (typeof window === 'undefined') return
  
  let urlParams = '?'
  Object.keys(params).map(paramKey => {
    const param = params[paramKey]
    if (!param) return
    if (param.minMax) {
      const min = this.props[`${paramKey}Min`]
      const max = this.props[`${paramKey}Max`]
      if (!min && !max) {
        if (paramKey == 'rent') {
          const { rentCurrency } = this.props
          if (!rentCurrency && rentCurrency !== 0) return
          if (urlParams.length != 1) urlParams += '&'
          urlParams += `${this.languageObjectHandler(param.url)}=`
          urlParams += `${this.languageHandler('w', 'in')}_${this.parseCurrency(rentCurrency)}`
        }
        return
      }
      if (urlParams.length != 1) urlParams += '&'
      urlParams += `${this.languageObjectHandler(param.url)}=`
      if (min) urlParams += `min_${min}`
      if (max) urlParams += `${min ? '_' : ''}${this.languageHandler('maks', 'max')}_${max}`
      if (paramKey === 'rent') {
        const { rentCurrency } = this.props
        if (rentCurrency || rentCurrency === 0) {
          urlParams += `_${this.parseCurrency(rentCurrency)}`
        }
        urlParams += this.languageHandler('_netto')
      }
      const unit = param.unit
      if (unit) urlParams += `${min || max ? '_' : ''}${this.languageObjectHandler(unit)}`
    } else {
      const value = this.props[paramKey]
      if (!value && value !== 0) return
      if (urlParams.length != 1) urlParams += '&'
      urlParams += `${this.languageObjectHandler(param.url)}=`
      if (paramKey === 'availabilityDate') return urlParams += value
      urlParams += this.languageObjectHandler(this[param.parser](value))
    }
  })
  
  if (typeof window === 'undefined') return
  if (allowedOrigins.indexOf(window.origin) === -1) return

  if (urlParams.length == 1) urlParams = ''
  const fullPathname = window.location.pathname + urlParams
  
  if (window.location.search !== urlParams) {
    window.history.pushState({ path: fullPathname }, '', fullPathname)
  }
}
