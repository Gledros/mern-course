const actions = {
  DISPLAY_ALERT: {
    id: "DISPLAY_ALERT",
    apply: (state) => ({
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!'
    })
  },
  HIDE_ALERT: {
    id: "HIDE_ALERT",
    apply: (state) => ({
      ...state,
      showAlert: false
    })
  }

}

export default actions