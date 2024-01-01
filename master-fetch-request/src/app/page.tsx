'use client'
import Image from 'next/image'

export default function Home() {
  const fetchDataWithTimeOut = async () => {
    const abortController = new AbortController()
    setTimeout(() => {
      abortController.abort()
    }, 2000)
    await fetch('/api/demo', { signal: abortController.signal })
  }
  const fetchDataWithPromiseRace = async () => {
    const abortController = new AbortController()
    try {
      await Promise.race([
        fetch('/api/demo', { signal: abortController.signal }),
        fetch('/api/demo', { signal: abortController.signal }),
        fetch('/api/demo', { signal: abortController.signal }),
        new Promise((_, reject) => setTimeout(reject, 1000))
      ])
    } catch (e) {
      abortController.abort()
    }
  }
  const fetchDataWithOutPromiseRace = async () => {

    //  雖然 reject 後有 throw  Error 但每個 fetch 還會繼續 request
    try {
      await Promise.all([
        fetch('/api/demo'),
        fetch('/api/demo'),
        new Promise((_, reject) => setTimeout(reject, 1000))
      ])
    } catch (e) {
    }

    // 所以我們需要加 signal 在每個 request 中，每當有 error 就 abort ，這邊要用 all 或是 race 都可以，差別在於定義，promise 確保每個 promise 都成功 resolve , race 只在乎第一個 resolve 或是 reject 的 promise。
    // const abortController = new AbortController()
    // try {
    //   await Promise.all([
    //     fetch('/api/demo', { signal: abortController.signal }),
    //     fetch('/api/demo', { signal: abortController.signal }),
    //     fetch('/api/demo', { signal: abortController.signal }),
    //     new Promise((_, reject) => setTimeout(reject, 1000))
    //   ])
    // } catch (e) {
    //   abortController.abort()
    //   console.log(e)
    // }
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
