import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { usePreview } from './hooks'
const useIsFirstRender = (callBack: () => void) => {
  const isFirst = useRef<boolean>(true)
  if (isFirst.current) {
    isFirst.current = false
    callBack()
    return true
  } else {
    return false
  }
}
function App() {
  const [count, setCount] = useState(0)
  const info = usePreview<number>(count)
  const isFirst = useIsFirstRender(() => console.log('11'))
  const bcChannel = useRef<BroadcastChannel | null>(null)
  useEffect(() => {
    let channel = new BroadcastChannel("test_channel");
    bcChannel.current = channel
    channel.addEventListener('message', () => {
      console.log('has message: ')
    })
    return () => {
      channel.removeEventListener('message', () => {
        console.log('has message: ')
      })
      channel.close()
    }
  }, [])
  const handleBcChannelEvent = () => {
    if (bcChannel.current === null) return
    bcChannel.current.postMessage('hello world')
  }
  return (
    <div>
      <button onClick={handleBcChannelEvent}>bcChannel event</button>
    </div>
  )
}

export default App
