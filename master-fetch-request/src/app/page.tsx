'use client'
import Image from 'next/image'

export default function Home() {
  const fetchDataWithTimeOut = async () => {
    const controller = new AbortController()
    setTimeout(() => {
      controller.abort()
    }, 2000)
    await fetch('/api/demo', { signal: controller.signal })
  }
  const fetchDataWithPromiseRace = async () => {
    const controller = new AbortController()
    try {
      await Promise.race([
        fetch('/api/demo', { signal: controller.signal }),
        fetch('/api/demo', { signal: controller.signal }),
        new Promise((_, reject) => setTimeout(reject, 1000))
      ])
    } catch (e) {
      controller.abort()
    }
  }
  const fetchDataWithOutPromiseRace = async () => {
    try {
      await Promise.all([
        fetch('/api/demo'),
        fetch('/api/demo'),
        new Promise((_, reject) => setTimeout(reject, 1000))
      ])
    } catch (e) {
    }
  }

  const waterFallRequest = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
    await fetch(`https://jsonplaceholder.typicode.com/todos/3`)
  }
  return (
    <>
      <button onClick={fetchDataWithTimeOut}>fetchDataWithTimeOut</button>
      <hr />
      <button onClick={fetchDataWithPromiseRace}>fetchDataWithPromiseRace</button>
      <hr />
      <button onClick={fetchDataWithOutPromiseRace}>fetchDataWithOutPromiseRace</button>
      <hr />
      <button onClick={waterFallRequest}>waterFallRequest</button>
    </>
  )
}
