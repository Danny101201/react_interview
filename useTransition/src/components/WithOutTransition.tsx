import { useState, ChangeEvent, useEffect } from 'react'
function WithOutTransition() {
  const [value, setValue] = useState('')
  const [lists, setLists] = useState<string[]>([])


  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    const L = []
    for (let i = 0; i < 10000; i++) {
      L.push(e.target.value)
    }
    setLists(L)
  }
  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChangeInput} />
      {lists.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  )
}

export default WithOutTransition
