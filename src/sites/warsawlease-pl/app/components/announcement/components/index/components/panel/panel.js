import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langObjHandler } from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PanelCategories from './components/categories/categories'
import PanelVisitor from './components/visitor/visitor'
import { buttonManager } from './components/visitor/managers/managers'

class AnnouncementIndexPanel extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
    this.langHandler = langObjHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
  }

  render() {
    const {
      lang,
      renderMap,
      renderCatalogue,
      renderMy,
      currentCategory,
      svgs,
      changeInputs,
      changeControl
    } = this.props

    return (
      <div id='announcement-index-panel'>
        <PanelCategories
          langObjHandler={this.langObjHandler}
          svgs={svgs}
          changeInputs={changeInputs}
          changeControl={changeControl}
          currentCategory={currentCategory}
        />
        {(renderMap || renderCatalogue) &&
        <>
          <PanelVisitor
            abc='asdad'
            changeRoute={this.changeRoute}
            lang={lang}
            langHandler={this.langObjHandler}
            buttonManager={this.buttonManager}
            // renderMap={renderMap}
            // changeRoute={this.changeRoute}
          />
        </>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanel))
