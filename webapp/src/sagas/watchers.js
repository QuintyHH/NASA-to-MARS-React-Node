import { takeEvery, takeLatest, all } from 'redux-saga/effects'
import actions from '../constants/actions'
import uploadSaga from './uploadSaga'
import snackbarSaga from './snackbarSaga'

//intercept FILE_UPLOAD
function* watchUpload() {
  yield all([takeLatest(actions.FILE_UPLOAD, uploadSaga.postNewFile)])
}

//intercept UPLOAD_FAIL or SUCCESS and display appropriate snackbar message
function* watchSnackbar() {
  yield takeEvery(
    actions.FILE_UPLOAD_FAIL,
    snackbarSaga.addToSnackbar,
    'File could not be uploaded!',
    'error'
  )
  yield takeEvery(
    [actions.FILE_UPLOAD_SUCCESS, actions.UPDATE_GRID],
    snackbarSaga.addToSnackbar,
    'Changes have been saved successfully!',
    'success'
  )
}

export { watchUpload, watchSnackbar }
