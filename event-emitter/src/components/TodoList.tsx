import React, { useState } from 'react'
import { useEventEmitter } from '../hooks'
import { TodoEvents } from '../types/todo'
import { TodoEntity } from '../types/TodoEntity'

export const TodoList = () => {
  const [list, setList] = useState<TodoEntity[]>([])
  const { useListener } = useEventEmitter<TodoEvents>()
  useListener('addTodo', (todo) => setList([...list, todo]))
  return (
    < ul >
      {list.map((todo, i) => (
        < li key={i} > {todo.title} </ li >
      ))}
    </ ul >
  )
}

