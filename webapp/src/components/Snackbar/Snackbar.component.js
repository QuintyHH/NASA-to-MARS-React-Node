import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { removeSnackbar } from '../../actions/snackbar'

const Snackbar = () => {
  const displayedRef = useRef([])
  const dispatch = useDispatch()
  const notifications = useSelector(
    ({ snackbarReducer }) => snackbarReducer.notifications
  )
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const storeDisplayed = (id) => {
    displayedRef.current = [...displayedRef.current, id]
  }

  const removeDisplayed = (id) => {
    displayedRef.current = [...displayedRef.current.filter((key) => id !== key)]
  }

  useEffect(() => {
    notifications.forEach(
      ({ key, message, type = 'default', dismissed = false }) => {
        if (dismissed) {
          closeSnackbar(key)
          return
        }

        if (displayedRef.current.includes(key)) return

        enqueueSnackbar(message, {
          key,
          variant: type,
          onExited: (_, snackbarKey) => {
            dispatch(removeSnackbar(snackbarKey))
            removeDisplayed(snackbarKey)
          },
        })

        storeDisplayed(key)
      }
    )
  }, [notifications, enqueueSnackbar, closeSnackbar, dispatch])

  return null
}

Snackbar.propTypes = {
  notifications: PropTypes.array,
}

export { Snackbar }
