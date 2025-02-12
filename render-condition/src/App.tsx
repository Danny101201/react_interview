import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useHook } from './hooks/useHook'
import { useHookWithEnable } from './hooks/useHookWithEnable'

function App() {
  const [count, setCount] = useState(0)
  const [enable, setEnable] = useState<boolean>(false)
  useHook(() => {
    if (!enable) return
    console.log('some function')
  })

  useHookWithEnable(enable, () => {
    console.log('some function')
  })
  return (
    <>
      <input type="checkbox" checked={enable} onChange={e => setEnable(e.target.checked)} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
