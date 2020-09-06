import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const AnnouncementCreate = loadable(() => import('./components/create/create'))
import AnnouncementShow from './components/show/show'
import AnnouncementIndex from './components/index/index'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { showCreate, showEdit, showMap, showList, showShow } = this.props

    return (
      <React.Fragment>
        {(showMap || showList) && <AnnouncementIndex />}
        {(showCreate || showEdit) && <AnnouncementCreate />}
        {showShow && <AnnouncementShow />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement)
