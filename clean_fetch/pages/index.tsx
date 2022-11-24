import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [todos, setTodos] = useState()
  const [errors, setErrors] = useState()
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    fetch('/api/todos', { signal, method: 'POST', body: 'Danny' }).then(async (res) => {
      if (res.ok) {
        setTodos(await res.json())
      } else {
        setErrors(await res.json())
      }
      console.log(res)
    })
    return ()=>{
      controller.abort()
    }
  }, [])

  return (
    <div>{JSON.stringify(errors)}</div>
  )
}
