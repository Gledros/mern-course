import React, { useReducer, useContext } from 'react'
import reducer from './reducer'
import actions from './actions'

const token = localStorage.getItem('token') || null
const location = localStorage.getItem('location') || ''
const user = localStorage.getItem('user')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: location,
  jobLocation: location
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: actions.DISPLAY_ALERT.id })

    setTimeout(() => {
      clearAlert()
    }, 3000)
  }

  const clearAlert = () => {
    dispatch({ type: actions.HIDE_ALERT.id })
  }

  const registerUser = async newUser => {
    dispatch({ type: actions.REGISTER_USER_BEGIN.id })

    try {
      const response = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })

      const data = await response.json()
      const { user, token } = data

      dispatch({
        type: actions.REGISTER_USER_SUCCESS.id,
        payload: { user, token }
      })
      addToLocalStorage(user, 'user')
      addToLocalStorage(token, 'token')
      addToLocalStorage(user.location, 'location')
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: actions.REGISTER_USER_ERROR.id,
        payload: { message: error.response.data.message }
      })
    }
    clearAlert()
  }

  const addToLocalStorage = (data, itemName) => {
    if (typeof data === 'object' && data !== null)
      localStorage.setItem(itemName, JSON.stringify(data))
    else localStorage.setItem(itemName, data)
  }

  const removeFromLocalStorage = itemName => {
    localStorage.removeItem(itemName)
  }

  const functions = {
    displayAlert,
    clearAlert,
    registerUser,
    addToLocalStorage,
    removeFromLocalStorage
  }

  return (
    <AppContext.Provider value={{ ...state, ...functions }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
