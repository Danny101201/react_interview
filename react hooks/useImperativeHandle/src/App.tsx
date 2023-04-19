import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Loading } from './components/Loading'

function App() {
  const [pending, setpending] = useState(0)
  const [completed, setCompleted] = useState(0)

  const loadingRef = useRef() as React.MutableRefObject<{
    startLoading: () => void,
    endLoading: () => void,
  }>
  
  const handleClick = async () => {
    setpending(pending + 1)
    await delay(3000)
    setpending(pending - 1)
    setCompleted(completed + 1)
  }
  const handleClicks = async () => {
    setpending(pre => pre + 1)
    await delay(3000)
    setpending(pre => pre - 1)
    setCompleted(pre => pre + 1)
  }
  useEffect(() => {
    loadingRef.current.startLoading()
    setTimeout(() => {
      loadingRef.current.endLoading()
    }, 2000)
  }, [])
  return (
    <div className="App">
      <Loading ref={loadingRef} />
      <p>
        pending : {pending}
      </p>
      <p>
        completed :{completed}
      </p>
      <button onClick={handleClick}>charge</button>
    </div>
  )
}

export default App


function delay(ms: number) {
  return new Promise((r) => {
    setTimeout(r, ms)
  })
}
