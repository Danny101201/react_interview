import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { EventEmitterProvider } from './EventEmitterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EventEmitterProvider>
      <App />
    </EventEmitterProvider>
  </React.StrictMode>,
)
