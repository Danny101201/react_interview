import { useState, useMemo, useTransition, ChangeEvent, useEffect } from 'react'
import reactLogo from './assets/react.svg'


function WithTransition() {
  const [value, setValue] = useState('')
  const [lists, setLists] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()


  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    startTransition(() => {
      const L = []
      for (let i = 0; i < 10000; i++) {
        L.push(e.target.value)
      }
      setLists(L)
    })
  }
  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChangeInput} />
      {isPending ? <p>loading...</p> : lists.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  )
}

export default WithTransition
