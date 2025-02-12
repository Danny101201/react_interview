import React, { useState } from 'react'

export const Tags = () => {
  const [value, setValue] = useState<string>('')
  const [tags, setTags] = useState<Array<{ value: string, key: string }>>([])
  const addTag = () => {
    setTags(props => ([
      ...props,
      {
        key: crypto.randomUUID(),
        value
      }
    ]))
    setValue('')
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => {
          if (e.code === 'Enter') {
            addTag()
          }
        }}
      />
      <button
        onClick={addTag}
      >+</button>
      <ul>
        {tags.map(({ value, key }) => <li key={key}>{value}</li>)}
      </ul>
    </div>
  )
}

