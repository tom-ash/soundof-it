import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const UserNew = loadable(() => import('./components/new/new'))
const UserAuth = loadable(() => import('./components/auth/auth'))
const UserEditAccountPassword = loadable(() =>
  import('./components/edit/components/account/components/password-reset/password-reset')
)
const UserEditAccount = loadable(() => import('./components/edit/components/account/account'))

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { renderCreate, renderAuthorize, renderEditPassword, renderEdit } = this.props

    return (
      <React.Fragment>
        {renderCreate && <UserNew />}
        {renderEdit && <UserEditAccount />}
        {renderAuthorize && <UserAuth />}
        {renderEditPassword && <UserEditAccountPassword />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
