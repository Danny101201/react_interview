import React, { useState } from 'react'
import { useEventEmitter } from '../hooks'
import { TodoEvents } from '../types/todo'
import { TodoEntity } from '../types/TodoEntity'
import { BaseEvent } from '../EventEmitter'

export const List = () => {

  const [list, setList] = useState<TodoEntity[]>([])
  const { useListener } = useEventEmitter<TodoEvents>()
  useListener('addTodo', (todo) => {
    setList(pre => [...pre, todo])
  })
  return (
    <div>
      {list?.map((item, index) => (
        <li key={index}>{item.text}</li>
      ))}
    </div>
  )
}

