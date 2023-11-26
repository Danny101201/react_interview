import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <>
      < TodoForm />
      < TodoList />
    </>
  )
}

export default App
