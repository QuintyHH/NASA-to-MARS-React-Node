import { call, put } from 'redux-saga/effects'
import {
  postNewMovementFileSuccess,
  postNewMovementFileFail,
} from '../actions/mission'
import services from '../services'

function* postNewFile(action) {
  try {
    const response = yield call(
      services.upload.postNewMovementFile,
      action.payload
    )

    yield put(postNewMovementFileSuccess(response))
  } catch (error) {
    yield put(postNewMovementFileFail(error))
  }
}

export default {
  postNewFile,
}
