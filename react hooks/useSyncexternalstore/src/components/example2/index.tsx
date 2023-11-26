import React from 'react'
import { setState, useMyStore } from './useMyStore'

export const Example2 = () => {
  const state = useMyStore()
  return (
    <div>
      <h1>Example 2</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState((pre) => ({ ...pre, count: pre.count + 1 }))}>count</button>
      <button onClick={() => setState((pre) => ({ ...pre, text: Math.random().toString() }))}>text</button>
      <RenderText />
      <RenderCount />
    </div>
  )
}
const RenderCount = () => {
  const count = useMyStore((state) => state.count)
  return (
    <>
      <h3>store.count:{count}</h3>
    </>
  )
}
const RenderText = () => {
  const text = useMyStore((state) => state.text)
  return (
    <>
      <h3>store.text:{text}</h3>
    </>
  )
}

