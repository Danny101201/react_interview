import { useState, useMemo, useTransition, ChangeEvent, useEffect } from 'react'
import reactLogo from './assets/react.svg'

// 在react中因為component render是一體的，如果某一個state造成花費較大的render的話會造成渲染block問題，就時候可以透過startTransition把花費較大的function放到call back中，概念就是告訴react分批render UI，但要注意如果component中的state不會頻繁render的話不要亂用startTransition，因為startTransition本質就是會讓react分批渲染兩次，這樣反而無法達到優化效果，反而增加render時間跟次數，所以以下的console.log('render')每次渲染都會log兩次

function WithTransition() {
  const [value, setValue] = useState('')
  const [lists, setLists] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()
  console.log('render')

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
