import React from 'react'

interface Todoprops {
  name: string
}
function Todo({ name }: Todoprops) {
  return (
    <div>{name}</div>
  )
}

export default Todo