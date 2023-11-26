import { Form } from './components/Form'
import { List } from './components/List'
import { Link } from './components/Link'
import { Label } from './components/Label'
import { EffectOnline } from './components/EffectOnline'
import { SyncExternalStorOnline } from './components/SyncExternalStorOnline'
import { useEffect, useLayoutEffect, useState, useSyncExternalStore } from 'react'
let state = {
  name: 'danny',
  someData: ['react', 'vue']
}
const subscribe = (callback: () => void) => {
  window.addEventListener('CUSTIME_EVENT', callback)
  return () => {
    window.removeEventListener('CUSTIME_EVENT', callback)
  }
}
const getSnapshot = () => state
function App() {
  const [value, setValue] = useState({ name: 'Danny', age: 10 })
  const [count, setCount] = useState(0)
  const data = useSyncExternalStore(subscribe, getSnapshot)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [useId, setuseId] = useState<number>(0)
  const now = performance.now()
  // while (performance.now() - now < 300) { }
  useEffect(() => {
    setIsAdmin(useId === 1)
  }, [useId])
  const handleChangeUser = () => {
    const anotherUserId = 1
    setuseId(anotherUserId)
  }
  const updateName = () => {
    state = {
      ...state,
      name: Math.random().toString()
    }
    window.dispatchEvent(new Event('CUSTIME_EVENT'))
  }
  const updateArray = () => {
    state = {
      ...state,
      someData: [...state.someData, Math.random().toString()]
    }
    window.dispatchEvent(new Event('CUSTIME_EVENT'))
  }
  useEffect(() => {
    const abortController = new AbortController()
    const getPost = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: abortController.signal })
      } catch (e) {
        console.log(e)
      }
    }
    getPost()
    return () => {
      abortController.abort()
    }
  }, [])
  useEffect(() => {
    value.name = 'any'
    console.log(value)
    
   }, [])
  return (
    <>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={updateName}>update name</button>
      <button onClick={updateArray}>update array</button>
      {/* <p>useEffect</p>
      <p>useId: {useId}</p>
      <p>isAdmin: {isAdmin ? 'true' : 'false'}</p>
      <button onClick={handleChangeUser}>changeUser</button> */}
      {/* <EffectOnline /> */}
      {/* <SyncExternalStorOnline /> */}
      {/* <Form />
      <List />
      <hr />
      <Label />
      <Link /> */}
    </>
  )
}

export default App

// useeffect
// EffectOnline component render time: 219.10000000149012
// installHook.js:1 EffectOnline component render time: 221.80000000074506
// EffectOnline.tsx:18 call useEffect time: 235.60000000149012
// EffectOnline.tsx:18 call useEffect time: 235.90000000223517
// EffectOnline.tsx:12 handleOfflineEvent time: 8705.60000000149
// EffectOnline.tsx:4 EffectOnline component render time: 8706.400000002235
// installHook.js:1 EffectOnline component render time: 8707.400000002235
