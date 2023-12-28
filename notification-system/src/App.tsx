import './App.css'
import { ActionType, useToast } from './context/ToastContext'
function App() {
  const { toastDispatch, toast } = useToast()
  return (
    <div>
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
