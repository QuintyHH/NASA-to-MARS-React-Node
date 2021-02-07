import actions from '../constants/actions'

const initialState = {
  notifications: [],
}

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ENQUEUE_SNACKBAR: {
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      }
    }
    case actions.CLOSE_SNACKBAR: {
      let notifications = () => {
        state.notifications.map((notification) =>
          action.payload.dismissAll || notification.key === action.payload.key
            ? { ...notification, dismissed: true }
            : notification
        )
      }
      return {
        ...state,
        notifications: notifications(),
      }
    }
    case actions.REMOVE_SNACKBAR: {
      let notifications = () =>
        state.notifications.filter(
          (notification) => notification.key !== action.payload.key
        )

      return {
        ...state,
        notifications: notifications(),
      }
    }
    default:
      return state
  }
}

export { snackbarReducer }
