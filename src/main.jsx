import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthGoogleProvider } from './contexts/authGoogle'

import './global.css'
import { Router } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <AuthGoogleProvider>
        <Router />
      </AuthGoogleProvider>
 
  </React.StrictMode>
)

