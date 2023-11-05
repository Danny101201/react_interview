import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
type FetchStatus = 'loading' | 'error' | 'success' | 'delay' | 'cancel'
function App() {
  const [fetchStatus, setfetchStatus] = useState<FetchStatus>()
  const [data, setData] = useState(null)
  const abortControlRef = useRef<AbortController>()
  const getData = async () => {
    abortControlRef.current = new AbortController()
    setTimeout(() => {
      setfetchStatus('delay')
    }, 2000)
    setfetchStatus('loading')
    fetch(' http://localhost:3000/posts', {
      signal: abortControlRef.current.signal
    })
      .then(async res => {
        const result = await res.json()
        setfetchStatus('success')
        setData(result)
      })
      .catch(e => {
        if (e.name === 'AbortError') {
          setfetchStatus('cancel')
        } else {
          setfetchStatus('error')
        }
      })
  }



  return (
    <>
      <button
        onClick={getData}
        disabled={
          fetchStatus === 'loading' || fetchStatus === 'delay'
        }
      >get data</button>

      {fetchStatus === 'success' && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
      {fetchStatus === 'loading' && <p>loading...</p>}
      {fetchStatus === 'error' && <p> error</p>}
      {fetchStatus === 'cancel' && <p> cancel</p>}
      {fetchStatus === 'delay' && (
        <>
          <div>your request is too long ,cancel to retry</div>
          <button onClick={() => abortControlRef.current?.abort()}>cancel</button>
        </>
      )}
    </>
  )
}

export default App
