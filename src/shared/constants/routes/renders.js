import {
  ROOT_TRACK,
  VISITOR_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK,
  VISITOR_COOKIES_POLICY_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK,
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_CONTACT_TRACK,
  PAGE_TRACK,
  PAGE_CREATE_TRACK,
  PAGE_INDEX_MAP_TRACK,
  PAGE_SHOW_TRACK,
  ANNOUNCEMENT_TRACK,
  ANNOUNCEMENT_CREATE_TRACK,
  ANNOUNCEMENT_INDEX_TRACK,
  ANNOUNCEMENT_INDEX_MAP_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK,
  USER_TRACK,
  USER_CREATE_TRACK,
  USER_AUTHORIZE_TRACK,
  USER_RESET_PASSWORD_TRACK,
  USER_EDIT_TRACK,
  USER_SHOW_TRACK
} from '../tracks/tracks'

export default {
  [ROOT_TRACK]: {
    [VISITOR_TRACK]: true,
    [ANNOUNCEMENT_TRACK]: true,
    [ANNOUNCEMENT_INDEX_TRACK]: true,
    [ANNOUNCEMENT_INDEX_MAP_TRACK]: true,
    [PAGE_TRACK]: true,
    [PAGE_SHOW_TRACK]: true
  },
  [VISITOR_PRIVACY_SETTINGS_TRACK]: {
    [VISITOR_TRACK]: true
  },
  [VISITOR_COOKIES_POLICY_TRACK]: {
    [VISITOR_TRACK]: true
  },
  [VISITOR_PRIVACY_POLICY_TRACK]: {
    [VISITOR_TRACK]: true
  },
  [VISITOR_TERMS_OF_SERVICE_TRACK]: {
    [VISITOR_TRACK]: true
  },
  [VISITOR_CONTACT_TRACK]: {
    [VISITOR_TRACK]: true
  },
  [PAGE_CREATE_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true
  },
  [PAGE_INDEX_MAP_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true
  },
  [PAGE_SHOW_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true
  },
  [ANNOUNCEMENT_CREATE_TRACK]: {
    [VISITOR_TRACK]: true,
    [ANNOUNCEMENT_TRACK]: true
  },
  [ANNOUNCEMENT_INDEX_CATALOGUE_TRACK]: {
    [VISITOR_TRACK]: true,
    [ANNOUNCEMENT_TRACK]: true,
    [ANNOUNCEMENT_INDEX_TRACK]: true,
    [ANNOUNCEMENT_INDEX_MAP_TRACK]: true
  },
  [ANNOUNCEMENT_INDEX_MY_TRACK]: {
    [VISITOR_TRACK]: true,
    [ANNOUNCEMENT_TRACK]: true
  },
  [USER_CREATE_TRACK]: {
    [VISITOR_TRACK]: true,
    [USER_TRACK]: true
  },
  [USER_AUTHORIZE_TRACK]: {
    [VISITOR_TRACK]: true,
    [USER_TRACK]: true
  },
  [USER_RESET_PASSWORD_TRACK]: {
    [VISITOR_TRACK]: true,
    [USER_TRACK]: true
  },
  [USER_EDIT_TRACK]: {
    [VISITOR_TRACK]: true,
    [USER_TRACK]: true
  },
  [USER_SHOW_TRACK]: {
    [VISITOR_TRACK]: true,
    [USER_TRACK]: true
  }
}
