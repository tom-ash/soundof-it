export const mapStateToProps = (store) => {
  const {
    language,
    showUserCreate,
    showUserAuthorize,
    showUserEditPhoneVerify
  } = store.app

  const {
    authorized,
    phoneVerified
  } = store.user.authorize.data

  const {
    control,
    inputs,
    data,
    errors
  } = store.announcement.create

  const {
    editing,
    connecting,
    success,
    publishing
  } = control

  const {
    id,
    category,
    district,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    area,
    rooms,
    floor,
    totalFloors,
    availabilityDateSelect,
    availabilityDate,
    pictureBlobs: blobs,
    pictureUploads: uploads,
    features,
    furnishings,
    descriptionPolish,
    descriptionEnglish,
    mapLatitude,
    mapLongitude
  } = inputs

  const {
    netRentAmountPerSqm: calculatedNetRentAmountPerSqm,
    grossRentAmount: calculatedGrossRentAmount,
    grossRentAmountPerSqm: calculatedGrossRentAmountPerSqm
  } = data

  return {
    calculatedNetRentAmountPerSqm,
    calculatedGrossRentAmount,
    calculatedGrossRentAmountPerSqm,
    language,
    showUserCreate,
    showUserAuthorize,
    showUserEditPhoneVerify,
    authorized,
    phoneVerified,
    editing,
    connecting,    
    success,
    publishing,
    id,
    category,
    district,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    area,
    rooms,
    floor,
    totalFloors,
    availabilityDateSelect,
    availabilityDate,
    blobs,
    uploads,
    features,
    furnishings,
    descriptionPolish,
    descriptionEnglish,
    mapLatitude,
    mapLongitude,
    errors
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
    changeErrors: (value) => dispatch({ type: 'announcement/create/errors', value: value })
  }
}
