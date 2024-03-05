import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContentProvider from './Content/AuthContentProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContentProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthContentProvider>
  ,
)
