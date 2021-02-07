import actions from '../constants/actions'

export const enqueueSnackbar = (notification) => {
  return {
    type: actions.ENQUEUE_SNACKBAR,
    payload: {
      ...notification,
      key: notification.key || new Date().getTime() + Math.random(),
    },
  }
}

export const closeSnackbar = (key) => ({
  type: actions.CLOSE_SNACKBAR,
  payload: {
    dismissAll: !key,
    key,
  },
})

export const removeSnackbar = (key) => ({
  type: actions.REMOVE_SNACKBAR,
  payload: { key },
})
