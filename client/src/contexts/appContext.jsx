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
    clearAlert()
  }

  const clearAlert = (timeout = 3000) => {
    setTimeout(() => {
      dispatch({ type: actions.HIDE_ALERT.id })
    }, timeout)
  }

  const setupUser = async ({ currentUser, endpoint, alertText }) => {
    dispatch({ type: actions.SETUP_USER_BEGIN.id })

    fetch(`/api/v1/auth/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    })
      .then(response => {
        if (response.ok) return response.json()

        return response.json().then(data => {
          throw new Error(data.message)
        })
      })
      .then(data => {
        const { user, token } = data

        dispatch({
          type: actions.SETUP_USER_SUCCESS.id,
          payload: {
            user,
            token,
            location: user.location,
            alertText: alertText
          }
        })
        addToLocalStorage(user, 'user')
        addToLocalStorage(token, 'token')
        addToLocalStorage(user.location, 'location')
      })
      .catch(error => {
        dispatch({
          type: actions.SETUP_USER_ERROR.id,
          payload: { message: error.message }
        })
      })
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
    setupUser
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
