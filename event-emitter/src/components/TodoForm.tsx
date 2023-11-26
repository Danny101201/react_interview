import React, { FormEvent, useState } from 'react'
import { useEventEmitter } from '../hooks'
import { TodoEvents } from '../types/todo'
type AAA = keyof TodoEvents
export const TodoForm = () => {
  const [title, setTitle] = useState<string>()
  const { emit } = useEventEmitter<TodoEvents>()
  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emit('addTodo', {
      title
    })
    setTitle('')
  }
  return (
    < form onSubmit={handleAddTodo} >
      < div >
        < label htmlFor={' title '}>標題：</ label >
        < input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id={'title'}
        />
        < button >新增</ button >
      </ div >
    </ form >
  )
}

