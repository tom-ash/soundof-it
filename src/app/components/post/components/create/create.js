import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedTextarea, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { save } from './functions/save'
import { languageObjectHandler } from '../../../../functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class PostCreate extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.nameManager = managers.nameManager.bind(this)
    this.metaManager = managers.metaManager.bind(this)
    this.saveManager = managers.saveManager.bind(this)
    this.urlManager = managers.urlManager.bind(this)
    this.bodyManager = managers.bodyManager.bind(this)
    this.save = save.bind(this)
  }

  render() {
    return (
      <div className='post-create'>
        <form>
          <ManagedText {...this.nameManager()} />
          {/* <ManagedTextarea {...this.metaManager()} /> */}
          {/* <ManagedText {...this.urlManager()} /> */}
          <ManagedTextarea {...this.bodyManager()} />
          <ManagedButton {...this.saveManager()} />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostCreate))
