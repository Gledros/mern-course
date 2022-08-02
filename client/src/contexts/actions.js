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
  REGISTER_USER_BEGIN: {
    id: 'REGISTER_USER_BEGIN',
    apply: (state, action) => ({
      ...state,
      isLoading: true
    })
  },
  REGISTER_USER_SUCCESS: {
    id: 'REGISTER_USER_SUCCESS',
    apply: (state, action) => ({
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      location: action.payload.user.location,
      jobLocation: action.payload.user.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User registered! Redirecting...'
    })
  },
  REGISTER_USER_ERROR: {
    id: 'REGISTER_USER_ERROR',
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
