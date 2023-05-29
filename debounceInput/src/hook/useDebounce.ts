import { useEffect, useState } from "react"


export const useDebounce = <T>({ value, delay = 1000 }: { value: T, delay?: number }) => {
  const [deferValue, setDeferValue] = useState<T>()

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeferValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return deferValue
}