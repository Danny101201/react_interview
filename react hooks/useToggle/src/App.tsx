
import './App.css'
import { useToggle, useToggleWithReducer } from './hooks'


function App() {
  const { result, toggle } = useToggle()
  const [isCheck, setToggle] = useToggleWithReducer(false)
  return (
    <p>
      {result ? 'checked' : 'unchecked'}
      <input type="checkbox" checked={result} onChange={() => toggle()} />
      <hr />
      {isCheck ? 'checked' : 'unchecked'}
      <input type="checkbox" checked={isCheck} onChange={(e) => setToggle(e.target.checked)} />
    </p>
  )
}

export default App
