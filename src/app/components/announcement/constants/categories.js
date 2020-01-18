import React from 'react'

export const categories = [
  {
    number: 0,
    value: 0,
    label: { pl: 'Biuro', en: 'Office' },
    url: { pl: 'biuro', en: 'office' },
    icon: <i className='fas fa-briefcase' />,
    stringIcon: "<i class='fas fa-briefcase' />",
    pinClassName: 'office'
  },
  {
    number: 1,
    value: 1,
    label: { pl: 'Lokal użytkowy', en: 'Usable Premises' },
    url: { pl: 'lokal_uzytkowy', en: 'usable_premises' },
    icon: <i className='fas fa-cash-register' />,
    stringIcon: "<i class='fas fa-cash-register' />",
    pinClassName: 'usable-premises'
  },
  {
    number: 2,
    value: 2,
    label: { pl: 'Mieszkanie', en: 'Apartment' },
    url: { pl: 'mieszkanie', en: 'apartment' },
    icon: <i className='fas fa-door-closed' />,
    stringIcon: "<i class='fas fa-door-closed' />",
    pinClassName: 'apartment'
  }
]
