import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDebounce } from './hook/useDebounce'
import { DebounceInput, InputRefImperativeHandleProps } from './component/DebounceInput'

function App() {

  const ref = useRef<InputRefImperativeHandleProps | null>(null)

  return (
    <>
      <div>
        <DebounceInput ref={ref} onChange={console.log} placeholder='111' style={{ background: 'gray' }} delay={3000} />

        <button onClick={() => ref.current?.clearInput()}>reset</button>
        <button onClick={() => ref.current?.focusInput()}>focus</button>
      </div>

      <div>

        <input type="text" onChange={ref.current?.changeInput} />
      </div>
      <p>{ref.current?.inputValue}</p>
    </>

  )
}

export default App
