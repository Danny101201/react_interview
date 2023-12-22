import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { OptInput } from './components/OptInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OptInput />
    </>
  )
}

export default App
