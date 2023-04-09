import React, { useState } from 'react'
const listCounts = 20000
function WithOutTransition() {
  const [value, setValue] = useState('')
  const [lists, setLists] = useState<string[]>([])
  console.log('render')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    const list = []
    for (let i = 0; i <= listCounts; i++) {
      list.push(e.target.value)
    }
    setLists(list)

  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChangeInput} />
      {lists.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  )
}

export default WithOutTransition