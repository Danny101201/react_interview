import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './component/Text'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.get('username'))
      }}>
        <label htmlFor="userName">userName</label>
        <input type="text" id="userName" name='username' />
        <button>submit</button>
      </form>
      {show && < Text />}
      <button onClick={() => setShow(pre => !pre)}>Toggle</button>
    </>
  )
}

export default App
