import { ChangeEvent, useRef, useState } from 'react'

import './App.css'

const useProxy = (obj: Record<string, unknown>) => {
  const [_, setState] = useState(0)
  const proxyRef = useRef(
    new Proxy(obj, {
      get() {
        return Reflect.get(...arguments)
      },
      set() {
        setState(v => v + 1)
        Reflect.set(...arguments)
        return true
      }
    })
  )

  return proxyRef.current
}

function App() {
  const user = useProxy({
    name: 'John',
    phone: '0963802367',
    address: {
      city: 'city'
    }
  }) as { name: string, phone: string }

  const onChanegName = (e: ChangeEvent<HTMLInputElement>) => {
    user.name = e.target.value
  }
  const onChanegAddress = (e: ChangeEvent<HTMLInputElement>) => {
    user.address.city = e.target.value
  }
  return (
    <div>
      <input type="text" onChange={onChanegName} value={user.name} />
      <p>{user.name}</p>
      <input type="text" onChange={onChanegAddress} value={user.address.city} />
      <p>{user.address.city}</p>
    </div>
  )
}

export default App
