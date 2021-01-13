import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementCreatePrimary from './components/primary/primary'
import AnnouncementCreatePictures from './components/pictures/pictures'
import AnnouncementCreateMap from './components/map/map'
import AnnouncementCreateAdditional from './components/additional/additional'
import AnnouncementCreateFeatures from './components/features/features'
import AnnouncementCreateFurnishings from './components/furnishings/furnishings'
import AnnouncementCreateDescription from './components/description/description'
import AnnouncementCreateSuccess from './components/success/success'
import WindmillSpinner from '../../../support/components/spinner/components/windmill/windmill.js'
import * as lifecycle from './functions/lifecycle'
import * as managers from './functions/managers'
import { langHandler, langObjHandler } from '../../../../functions/lang-handler'
import { getAnnouncement } from './functions/get-announcement'
import { AnnouncementCreateSteps } from './components/steps/steps'
import { ManagedButton } from 'managed-inputs'
import { publish } from './components/publishing/functions/publish'
import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'
import { savePicture } from './functions/save-picture'
import { saveAnnouncement } from './functions/save-announcement'
import { changeRoute } from '../../../../functions/routers/change-route'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import SeparationLine from '../../../support/components/separation-line/separation-line'

import {
  categoryManager,
  districtManager,
  areaManager
} from './components/primary/functions/managers'

import { handleErrorOnValidate } from './components/primary/functions/errors-handler'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.getAnnouncement = getAnnouncement.bind(this)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.categoryManager = categoryManager.bind(this)
    this.districtManager = districtManager.bind(this)
    this.areaManager = areaManager.bind(this)
    this.validatePictures = validatePictures.bind(this)
    this.validateMap = validateMap.bind(this)
    this.publish = publish.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.savePicture = savePicture.bind(this)
    this.saveAnnouncement = saveAnnouncement.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    const {
      changeApp,
      changeAnnouncementShowData,
      authorized,
      step,
      id,
      category,
      district,
      area,
      isMobile,
      lang,
      scalableVectorGraphics
    } = this.props

    return (
      <>
        <AnnouncementCreateSteps authorized={authorized} step={step} scalableVectorGraphics={scalableVectorGraphics} />
        <div
          id='announcement-create'
          className={step}
        >
          {step === 'form' &&
          <>
            <AnnouncementCreatePrimary />
            <SeparationLine />
            <AnnouncementCreatePictures />
            <SeparationLine />
            <AnnouncementCreateMap />
            <SeparationLine />
            <AnnouncementCreateAdditional />
            <SeparationLine />
            <AnnouncementCreateFeatures />
            <AnnouncementCreateFurnishings />
            <AnnouncementCreateDescription />
            <SeparationLine />
            <ManagedButton {...this.addAnnouncementManager()} />
          </>}
          {step === 'publishing' &&
          <div className='requesting'>
            <div className='inner'>
              <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
            </div>
          </div>}
          {step === 'success' &&
          <AnnouncementCreateSuccess
            changeApp={changeApp}
            changeRoute={this.changeRoute}
            id={id}
            category={category}
            district={district}
            area={area}
            changeAnnouncementShowData={changeAnnouncementShowData}
            langObjHandler={this.langObjHandler}
            isMobile={isMobile}
            lang={lang}
            scalableVectorGraphics={scalableVectorGraphics}
          />}
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
