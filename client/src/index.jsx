import 'normalize.css'
import '@css/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from '@contexts/appContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode> //REACT v18 useEffect BUG when using StrictMode on development
    <AppProvider>
      <App />
    </AppProvider>
  // </React.StrictMode>
)
