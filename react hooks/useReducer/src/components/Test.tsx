import React, { useReducer } from 'react'
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
  name: string
}
interface InfoState {
  name: string
  age: number
  isLoading: boolean
}
const counReducer = (state: CountState, action: CountAction) => {
  const { type, payload } = action
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload
      }
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload
      }
    default:
      return state
  }
}

const infoReducer = (pre: InfoState, next: Partial<InfoState>) => {
  return {
    ...pre,
    ...next
  }
}
function Test() {
  const [state, dispatch] = useReducer(counReducer, {
    name: 'Danny',
    count: 10
  })
  const [info, dispatchInfo] = useReducer(infoReducer, {
    name: '',
    age: 18,
    isLoading: false
  })
  if (info.isLoading) return (
    <div>
      <p>loading ... </p>
      <button onClick={() => dispatchInfo({ isLoading: false })}>stop loading</button>
    </div>
  )
  return (
    <div>
      <p>name: {state.name}</p>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 1 })}>-1</button>
      <div>
        <h1>info</h1>
        <div>
          <p>age: {info.age}</p>
          <input value={info.age} type="number" onChange={e => dispatchInfo({ age: Number(e.target.value) })} />
        </div>
        <div>
          <p>name: {info.name}</p>
          <input value={info.name} type="text" onChange={e => dispatchInfo({ name: e.target.value })} />
        </div>

        <button onClick={() => dispatchInfo({ isLoading: true })}> loading</button>
      </div>
    </div>
  )
}

export default Test