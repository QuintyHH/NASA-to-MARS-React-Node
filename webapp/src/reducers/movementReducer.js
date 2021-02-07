import actions from '../constants/actions'

const initialState = {
  numberOfRovers: 0,
  error: null,
  grid: {
    height: 400,
    width: 400,
  },
}

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILE_UPLOAD_SUCCESS: {
      return {
        ...state,
        numberOfRovers: action.payload,
      }
    }
    case actions.FILE_UPLOAD_FAIL: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case actions.UPDATE_GRID: {
      return {
        ...state,
        grid: action.payload,
      }
    }

    default:
      return state
  }
}

export { missionReducer }
