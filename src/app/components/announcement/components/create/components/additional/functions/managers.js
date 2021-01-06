import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { numberOptionsProvider } from '../../../../../../../functions/shared'
import ScalableVectorGraphic from '../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  RENT_INPUTTED_EVENT,
  RENT_CURRENCY_SELECTED_EVENT,
  ROOMS_INPUTTED_EVENT,
  FLOOR_INPUTTED_EVENT,
  TOTAL_FLOORS_INPUTTED_EVENT,
  SHOW_AVAILABILITY_DATE_EVENT
} = analyticEvents

export function rentAmountManager() {
  const {
    create: text
  } = inputs.rentHeight

  const {
    category,
    changeInputs,
    scalableVectorGraphics
  } = this.props

  let label = this.languageObjectHandler(text)

  const rentAmountType = [0, 1, 6, 7].indexOf(category) !== -1 ? 'netRentAmount' : 'grossRentAmount'

  if(rentAmountType === 'netRentAmount') {
    label = this.languageObjectHandler({ pl: 'Miesięczna cena netto', en: 'Monthly Net Price'})
  }

  return {
    classNames: { container: 'form-input text rent-amount' },
    value: this.props[rentAmountType],
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />,
    type: 'number',
    label,
    onChange: value => changeInputs({ [rentAmountType]: value }),
    onBlur: () => {
      this.getRentAmounts()
      sendGaEvent(RENT_INPUTTED_EVENT)
    }
  }
}

export function rentCurrencyManager() {
  const { rentCurrency: value, scalableVectorGraphics } = this.props
  const currencies = [
    { value: 0, text: 'zł' },
    { value: 1, text: '€' },
    { value: 2, text: '$' }
  ]

  return {
    classNames: { container: 'form-input select rent-currency' },
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />,
    value,
    options: currencies,
    onSelect: ({ value: optionValue }) => {
      this.onSelectHandler('rentCurrency', optionValue)
      sendGaEvent(RENT_CURRENCY_SELECTED_EVENT)
    }
  }
}

export function roomsManager() {
  const {
    icon,
    create: text
  } = inputs.rooms

  const { category, scalableVectorGraphics } = this.props

  let label = this.languageObjectHandler(text)

  if (category === 2) label = this.languageObjectHandler({ pl: 'Liczba pokoi', en: 'Rooms Amount' })

  return {
    classNames: { container: 'form-input select' },
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />,
    value: this.props.rooms,
    label,
    options: numberOptionsProvider(99),
    onSelect: (option) => {
      this.onSelectHandler('rooms', option.value)
      sendGaEvent(ROOMS_INPUTTED_EVENT)
    }
  }
}

export function floorManager() {
  const {
    icon,
    create: text
  } = inputs.floor

  const {
    scalableVectorGraphics
  } = this.props

  return {
    classNames: { container: 'form-input select' },
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />,
    value: this.props.floor,
    label: this.languageObjectHandler(text),
    options: this.floorsProvider(),
    onSelect: (option) => {
      this.onSelectHandler('floor', option.value)
      sendGaEvent(FLOOR_INPUTTED_EVENT)
    }
  }
}

export function totalFloorsManager() {
  const {
    icon,
    create: text
  } = inputs.totalFloors

  const {
    scalableVectorGraphics
  } = this.props

  return {
    classNames: { container: 'form-input select' },
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />,
    value: this.props.totalFloors,
    label: this.languageObjectHandler(text),
    options: numberOptionsProvider(99),
    onSelect: (option) => {
      this.onSelectHandler('totalFloors', option.value)
      sendGaEvent(TOTAL_FLOORS_INPUTTED_EVENT)
    }
  }
}

export function showAvailabilityDateManager() {
  const {
    showAvilabilityDate,
    changeControl
  } = this.props

  return {
    classNames: { container: 'form-input checkbox availability-date' },
    checked: showAvilabilityDate,
    label: this.languageObjectHandler({
      pl: 'Dodaj datę dostępności',
      en: 'Add Availability Date'
    }),
    onClick: value => {
      changeControl({ showAvilabilityDate: value })
      sendGaEvent(SHOW_AVAILABILITY_DATE_EVENT)
    }
  }
}
