import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const abortController = new AbortController()
    const mql = window.matchMedia("(max-width: 600px)")
    const clickHandlerFunction = (e: MouseEvent) => {
      console.log('click')
    }
    const handlerMediaChangeFunction = (e: MediaQueryListEvent) => {
      console.log(e)
    }
    mql.addEventListener('change', handlerMediaChangeFunction, { signal: abortController.signal })
    document.addEventListener('click', clickHandlerFunction, { signal: abortController.signal })

    return () => {
      // before
      // document.removeEventListener('click', clickHandlerFunction)
      // mql.removeEventListener('change', handlerMediaChangeFunction)

      //  after
      abortController.abort()
    }
  }, [])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
