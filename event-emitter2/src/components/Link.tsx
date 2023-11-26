import React, { useEffect, useState } from 'react'
import { emitter } from '../Emitter'

export const Link = () => {
  const [lists, setList] = useState<{ text: string }[]>([])
  useEffect(() => {
    const token = emitter.addListener('addText', (props: { text: string }) => setList(pre => [...pre, props]))
    return () => {
      token.remove()
    }
  }, [])
  return (
    <div>
      {lists.map((list, i) => (
        <li key={i}>{list.text}</li>
      ))}
    </div>
  )
}

