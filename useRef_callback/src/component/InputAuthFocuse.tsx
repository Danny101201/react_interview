import React, { useCallback, useState } from 'react'

const ref = (node: HTMLInputElement | null) => {
  node?.scrollIntoView({ behavior: 'smooth' })
}
export const InputAuthFocus = () => {
  const [show, setShow] = useState<boolean>(false)
  // 在這邊你一定要加上 useCallback ,否則一但 state change 這邊 input 都會自動 scroll 上去，然後 react 官方有說 , useCallback 只是一個優化的選項，所以不加 useCallback 應該要能 work 這會影響到你升級到 react 19 （因為移除 useCallback） ，所以當你發現你的 code 必須要依賴 useCallBack 那肯能要注意了，所以最終解法就是將 useRef 的 callBackFunction 移動到最上面。
  // const ref = useCallback((node: HTMLInputElement | null) => {
  //   node?.scrollIntoView({ behavior: 'smooth' })
  // }, [])
  return (
    <>
      <button onClick={() => setShow(pre => !pre)}>{show ? 'hidden' : 'show'}</button>
      <div style={{ width: 'screen', height: '200vh', background: 'red' }}></div>
      <input ref={ref} defaultValue="Hello world" />
    </>
  )
}
