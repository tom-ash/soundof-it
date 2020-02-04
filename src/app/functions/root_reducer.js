import { combineReducers } from 'redux'
import { appReducer } from './reducers'
import { announcementReducer } from '../components/announcement/functions/reducer'
import { userReducer } from '../components/user/functions/reducers.js'
import { visitorReducer } from '../components/visitor/functions/reducers.js'
import { scaffoldReducer } from '../components/scaffold/functions/reducer'

export const rootReducer = route => combineReducers({
  app: appReducer(route),
  announcement: announcementReducer,
  user: userReducer,
  visitor: visitorReducer,
  scaffold: scaffoldReducer
})
