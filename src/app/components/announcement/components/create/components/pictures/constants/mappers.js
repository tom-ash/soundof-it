export const mapStateToProps = (store) => {
  return {
    showAnnouncementEdit: store.app.showAnnouncementEdit,
    language: store.app.language,
    scalableVectorGraphics: store.app.scalableVectorGraphics,
    files: store.announcement.create.inputs.picFiles,
    blobs: store.announcement.create.inputs.blobs,
    error: store.announcement.create.errors.pictures,
    addingPicture: store.announcement.create.control.addingPicture
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
    changeControl: value => dispatch({ type: 'announcement/create/control', value })
  }
}
