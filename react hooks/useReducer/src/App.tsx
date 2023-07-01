import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Loading } from './components/Loading'
import State from './components/State'
import { flushSync } from 'react-dom'
import Test from './components/Test'

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}
interface CountAction {
  type: CountActionKind
  payload: number
}
interface CountState {
  count: number;
}
const countReducer = (state: CountState, action: CountAction) => {
  const { payload, type } = action
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        count: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        count: state.count - payload,
      };
    default:
      return state;
  }

}
function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const willRenderThreeTime = () => {
    flushSync(() => {
      setCount(1)
    })
    flushSync(() => {
      setCount(2)
    })
    flushSync(() => {
      setCount(3)
    })
  }
  const onlyRenderOnce = () => {
    setCount(1)
    setCount(2)
    setCount(3)
    setCount(pre => pre + 1)
    setName(Math.random().toString())
    setCount(pre => pre + 1)
  }
  const batch_demo2 = () => {
    setTimeout(() => {
      setCount(1)
      setCount(2)
      setCount(3)
    }, 1000)
  }
  return (
    <Test />
    // <div className="App">
    //   <State />
    //   <button onClick={onlyRenderOnce}>+3 {count}{name}</button>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 1 })}>+</button>
    //     <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 1 })}>-</button>
    //     <p>
    //       count is {state.count}
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //   <Loading />
    // </div>
  )
}

export default App
