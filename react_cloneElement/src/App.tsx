import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form>
        <Title title='title'/>
      </Form>
    </div>
  )
}

export default App
