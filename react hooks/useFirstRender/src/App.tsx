import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const useIsFirstRender = () => {
  const isFirst = useRef<boolean>(true)
  if (isFirst.current) {
    isFirst.current = false
    return true
  } else {
    return false
  }
}
// 只執行第一次 render 
const useRunOnce = (fn: () => void, sessionKey: string) => {
  const triggered = useRef<boolean>(false)
  useEffect(() => {
    const isTriggered = sessionStorage.getItem(sessionKey) ?? triggered.current
    if (!isTriggered) {
      triggered.current = true
      fn()
      sessionStorage.setItem(sessionKey, 'true')
    }
  }, [fn, sessionKey])
}

// 完整跑完 react 生命週期取消第一次 render 呼叫
const useRunOnceTwo = (fn: () => void) => {
  useEffect(() => {
    let ignore = false

    if (!ignore) {
      return
    }
    fn()
    return () => {
      ignore = true
    }
  }, [fn])
}
const AAA = () => {
  useRunOnce(() => { console.log(10) }, 'test')

  return (
    <div>AAA</div>
  )
}
function App() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      {open && <AAA />}
      <button onClick={() => setOpen(pre => !pre)}>toggle</button>
    </div>
  )
}

export default App
