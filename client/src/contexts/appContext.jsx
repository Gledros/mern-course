import React, { useReducer, useContext } from "react"
import reducer from "./reducer"
import actions from "./actions"

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
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

  return <AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>
    {children}
  </AppContext.Provider>
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
