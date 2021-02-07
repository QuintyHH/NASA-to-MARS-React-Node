import { combineReducers } from 'redux'
import { missionReducer } from './movementReducer'
import { snackbarReducer } from './snackbarReducer'

export default combineReducers({
  missionReducer,
  snackbarReducer,
})
