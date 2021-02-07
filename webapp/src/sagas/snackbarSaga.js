import { enqueueSnackbar } from '../actions/snackbar'

const { put } = require('redux-saga/effects')

function* addToSnackbar(...data) {
  console.log('wooot')
  const [message, type] = data
  yield put(enqueueSnackbar({ message, type }))
}

export default {
  addToSnackbar,
}
