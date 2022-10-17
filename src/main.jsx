import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthContextProvider } from './contexts/authGoogle'
import './global.css'
import { Router } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <Router />
    </AuthContextProvider>
  </React.StrictMode>
)

