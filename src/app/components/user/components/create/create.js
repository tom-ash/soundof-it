import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import { changePath } from '../../../../functions/routers/change-path'
import UserCreateEmail from './components/email/email'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../functions/language-handler'
import { hideUser } from '../../functions/hide-user'
import { UserCreateSteps } from './components/steps/steps'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.changePath = changePath.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.hideUser = hideUser.bind(this)
  }

  render() {
    const {
      success,
      step,
      venue,
      scalableVectorGraphics
    } = this.props

    if (venue === 'announcementCreate') return  <UserCreateEmail />

    return (
      <React.Fragment>
        <div
          id='user-create-container'
          className='container'
        >
          <h1 className='page-header'>
            {this.languageHandler('Zarejestruj', 'Sign Up')}
          </h1>
          <UserCreateSteps
            step={step}
            scalableVectorGraphics={scalableVectorGraphics}
          />
          {success === null && <UserCreateEmail />}
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(withStyles(styles)(UserCreate))
