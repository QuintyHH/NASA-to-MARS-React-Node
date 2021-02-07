import { fork } from 'redux-saga/effects'
import { watchUpload, watchSnackbar } from './watchers'

function* rootSaga() {
  yield fork(watchUpload)
  yield fork(watchSnackbar)
}

export default rootSaga
