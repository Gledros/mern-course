const actions = {
  DISPLAY_ALERT: {
    id: 'DISPLAY_ALERT',
    apply: (state, action) => ({
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!'
    })
  },
  HIDE_ALERT: {
    id: 'HIDE_ALERT',
    apply: (state, action) => ({
      ...state,
      showAlert: false
    })
  },
  SETUP_USER_BEGIN: {
    id: 'SETUP_USER_BEGIN',
    apply: (state, action) => ({
      ...state,
      isLoading: true
    })
  },
  SETUP_USER_SUCCESS: {
    id: 'SETUP_USER_SUCCESS',
    apply: (state, action) => ({
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      location: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText
    })
  },
  SETUP_USER_ERROR: {
    id: 'SETUP_USER_ERROR',
    apply: (state, action) => ({
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.message
    })
  }
}

export default actions
