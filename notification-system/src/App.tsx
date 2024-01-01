import { useEffect, useInsertionEffect, useLayoutEffect } from 'react'
import './App.css'
import { ActionType, useToast } from './context/ToastContext'
function App() {
  const { toastDispatch, toast } = useToast()

  useEffect(() => {
    console.log('run after render ')

  }, [])
  useLayoutEffect(() => {
    console.log('run before render')
  }, [])
  useInsertionEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      .box{
        width:400px;
        height:400px;
        background:red;
      }
    `
    document.head.appendChild(style)
    console.log('run before dom change')
    // not run on server only on client 
    // often do in css-in-js need to change dom tree
  }, [])
  return (
    <div>
      <div className='box'>123</div>
      <div>
        <button onClick={() => toastDispatch({ type: ActionType.ADD, payload: { content: 132, type: 'info' } })}>add context</button>
      </div>
      <div>
        <button onClick={() => toastDispatch({ type: ActionType.REMOVE_ALL, payload: {} })}>delete context</button>
      </div>
      <pre>
        {JSON.stringify(toast, null, 2)}
      </pre>

    </div>
  )
}

export default App
