import React, { useSyncExternalStore } from 'react'
import { store } from './store'

export const Example = () => {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot)


  return (
    <div>
      <h1>Example 1</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => store.setState((pre) => ({ ...pre, count: pre.count + 1 }))}>count</button>
      <button onClick={() => store.setState((pre) => ({ ...pre, text: Math.random().toString() }))}>text</button>
      <RenderText />
      <RenderCount />
    </div>
  )
}
const RenderCount = () => {
  const count = useSyncExternalStore(store.subscribe, () => store.state.count)
  return (
    <>
      <h3>store.count:{count}</h3>
    </>
  )
}
const RenderText = () => {
  const text = useSyncExternalStore(store.subscribe, () => store.state.text)
  return (
    <>
      <h3>store.text:{text}</h3>
    </>
  )
}

