import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo';
import WithLoading from './components/withLoading';
const TodoListWithLoading = WithLoading(Todo);
function App() {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <button onClick={() => setLoading(!loading)}>toggle</button>
      <TodoListWithLoading isLoading={loading} name='name' />
    </>
  )
}

export default App
