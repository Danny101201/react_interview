import { useCallback, useState } from "react"

export const useCounter = (value: number) => {
  const [count, setCount] = useState(value)
  const addCount = useCallback(() => setCount(pre => pre + 1), [])
  const minusCount = useCallback(() => setCount(pre => pre - 1), [])
  const addByCount = useCallback((value: number) => setCount(pre => pre + value), [])
  const reset = useCallback(() => setCount(value), [])
  return {
    count,
    addCount,
    minusCount,
    addByCount,
    reset,
  }
}