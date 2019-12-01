import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { showAnnouncement } from './functions/routers'
import AnnouncementCreate from './components/create/create'
import AnnouncementShow from './components/show/show'
import AnnouncementIndex from './components/index/index'
import './styles/styles.scss'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { showCreate, showIndexVisitor, showIndexUser } = this.props

    return (
      <div id='announcement'>
        {showCreate                          && <AnnouncementCreate />}
        {(showIndexVisitor || showIndexUser) && <AnnouncementIndex />}
        {showAnnouncement()                  && <AnnouncementShow />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement)
