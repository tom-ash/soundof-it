import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../functions/language-handler'
import UserAuthorizeEmailTrack from './components/email-password/email-password'
import './styles/styles.scss'

class UserAuthorize extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
  }

  render() {
    return (
      <div id='user-authorize' className='container narrow-container shadowed' onClick={e => e.stopPropagation()}>
        <h2 className='page-header'>
          <i className='fas fa-sign-in-alt' /> {this.languageHandler('Logowanie', 'Signing In')}
        </h2>
        <UserAuthorizeEmailTrack />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorize)
