import './App.css'
import { Counter } from './components/Counter'
import { Example } from './components/example1'
import { Example2 } from './components/example2'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { useWindowSize } from './hooks/useWindowSize'

function App() {
  const isOnline = useOnlineStatus()
  const { width, height } = useWindowSize()
  return (
    <>
      <Counter />
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
      <p>width : {width}</p>
      <p>height : {height}</p>
      <br />
      <Example />
      <Example2 />
    </>
  )
}

export default App
