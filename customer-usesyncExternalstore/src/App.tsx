import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSyncExternalStore } from './hook/useSyncExternalStore'
const subscribe = (callBack: () => void) => {
  window.addEventListener('resize', callBack)
  return () => {
    window.removeEventListener('resize', callBack)
  }
}
const subscribe2 = (callBack: () => void) => {
  window.addEventListener('CUSTOMER_EVENT', callBack)
  return () => {
    window.removeEventListener('CUSTOMER_EVENT', callBack)
  }
}
let state = {
  name: 'Danny'
}
function App() {
  const windowWidth = useSyncExternalStore(subscribe, () => window.innerWidth)
  const data = useSyncExternalStore(subscribe2, () => state)
  const handleUpdateName = () => {
    state = {
      ...state,
      name: Math.random().toString()
    }
    window.dispatchEvent(new Event('CUSTOMER_EVENT'))
  }
  return (
    <>
      <p>windowWidth : {windowWidth}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleUpdateName}>update name</button>
    </>
  )
}

export default App
