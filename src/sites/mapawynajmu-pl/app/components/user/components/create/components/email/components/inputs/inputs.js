import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedSelect } from 'managed-inputs'
// import Header from '../../../../../../../support/components/heading'
import Hint from '../../../../../../../support/components/hint/hint.js'
// import SeparationLine from '../../../../../../../support/components/separation-line/separation-line.js'
import * as managers from './functions/managers'
import langHandler from '../../../../../../../../functions/lang-handler'
import * as mappers from './constants/mappers'
import {
  CONTACT_DATA_HEADER,
  // ACCOUNT_DATA_HEADER,
  NAME_AREA_CODE_AND_PHONE_NUMBER_HINT,
  // EMAIL_AND_PASSWORD_HINT,
} from './constants/texts.js'

class UserCreateEmailInputs extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    // this.accountTypeManager = managers.accountTypeManager.bind(this)
    // this.firstNameManager = managers.firstNameManager.bind(this)
    // this.businessNameManager = managers.businessNameManager.bind(this)
    this.areaCodeManager = managers.areaCodeManager.bind(this)
    this.phoneNumberManager = managers.phoneNumberManager.bind(this)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
  }

  render() {
    return (
      <div className='inputs'>
        <ManagedText {...this.emailAddressManager()} />
        <ManagedText {...this.passwordManager()} />
        <Hint text={this.langHandler(NAME_AREA_CODE_AND_PHONE_NUMBER_HINT)} />
        <div className='country-code-phone-number-container'>
          <ManagedSelect {...this.areaCodeManager()} />
          <ManagedText {...this.phoneNumberManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs)
