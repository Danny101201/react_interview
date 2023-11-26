import React, { useState } from 'react'
import { emitter } from '../Emitter'

export const Label = () => {
  const [text, setText] = useState<string>('')
  const handleAddText = () => {
    emitter.emit('addText', { text })
  }
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddText}>add text</button>
    </div>
  )
}

