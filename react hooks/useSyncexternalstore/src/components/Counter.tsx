import React, { useState, useSyncExternalStore } from 'react'
import { counterStore } from '../store/counter'

export const Counter = () => {
  const [text, setText] = useState<string>('')
  const todos = useSyncExternalStore(counterStore.subscribe, counterStore.getSnapShot)
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => counterStore.addTodo(text)}>add todos</button>
    </div>
  )
}

