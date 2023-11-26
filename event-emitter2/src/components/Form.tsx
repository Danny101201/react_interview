import React, { FormEvent, useState } from 'react'
import { useEventEmitter } from '../hooks'
import { TodoEvents } from '../types/todo'

export const Form = () => {
  const [text, setText] = useState<string>('')
  const { emit } = useEventEmitter<TodoEvents>()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emit('addTodo', {
      text
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button>submit</button>
    </form>
  )
}

