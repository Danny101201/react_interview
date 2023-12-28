import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContextWrapper } from './context/ToastContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ToastContextWrapper>
    <App />
  </ToastContextWrapper>
  ,
)
