import actions from '../constants/actions'

export const postNewMovementFile = (fileData) => ({
  type: actions.FILE_UPLOAD,
  payload: fileData,
})

export const postNewMovementFileSuccess = (fileData) => ({
  type: actions.FILE_UPLOAD_SUCCESS,
  payload: fileData,
})

export const postNewMovementFileFail = (error) => ({
  type: actions.FILE_UPLOAD_FAIL,
  payload: error,
})

export const updateGrid = (grid) => ({
  type: actions.UPDATE_GRID,
  payload: grid,
})
