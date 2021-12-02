import { ANNOUNCEMENT_SHOW_TRACK } from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang
  } = store.app

  const {
    'announcement/create': renderCreate,
    'announcement/edit': renderEdit,
    'announcement/index': renderIndex,
    [ANNOUNCEMENT_SHOW_TRACK]: renderShow
  } = store.render
  
  return {
    lang,
    renderCreate,
    renderEdit,
    renderIndex,
    renderShow
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {}
}
    