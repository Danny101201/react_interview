import { useEffect, useState } from 'react'
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
const peoples = [
  { name: 'Danny', age: 10 },
  { name: 'Lucy', age: 40 },
  { name: 'Sum', age: 28 },
]
const nestArray = [
  [1, 2, 3],
  [[4, 5], 6]
]
const newArray = [10, 5, 20]
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
  useEffect(() => {
    const objectGroupBy = Object.groupBy(peoples, people => people.name[0])
    // const objectGroupBy = Map.groupBy(peoples, people => people.name)
    const arrayWith = peoples.with(1, 7) // [{...},7,{...}]
    const arrayAt = peoples.at(-1) // {name: 'Sum', age: 40}
    const toReversed = peoples.toReversed()
    const flatArray = nestArray.flat(Number.POSITIVE_INFINITY) //  [1, 2, 3, 4, 5, 6]
    const lastArray = newArray.findLast(array => array <= 10) //5
    console.log(lastArray)
  }, [])
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
