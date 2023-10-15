import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface UserResponse {
  id: number;
  name: string;

}


const initialList: UserResponse[] = [
  {
    "id": 1,
    "name": "Leanne Graham",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
  },
  {
    "id": 3,
    "name": "Danny",
  },
  {
    "id": 4,
    "name": "Lucy",
  },
]
function App() {
  const [value, setValues] = useState<UserResponse[]>(initialList)
  const removeLast = () => {
    setValues(pre => pre.slice(0, -1))
  }
  const removeFirst = () => {
    setValues(pre => pre.slice(1))
  }
  const removeFromId = (id: number) => {
    setValues(pre => pre.filter(item => item.id !== id))
  }
  return (
    <>
      {
        value.map(item => (
          <div key={item.id}>
            <p onClick={() => removeFromId(item.id)}>
              {item.id} - {item.name}
            </p>
          </div>
        ))
      }
      <button onClick={removeLast}>remove last</button>
      <button onClick={removeFirst}>remove first</button>

    </>
  )
}

export default App
