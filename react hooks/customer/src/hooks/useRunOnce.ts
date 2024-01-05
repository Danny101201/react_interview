import { useRef, useEffect } from "react"

export const useRunOnce = (fn: () => void) => {
  const triggered = useRef<boolean>(false)
  useEffect(() => {
    if (!triggered.current) {
      fn()
      triggered.current = true
    }
  }, [fn])
}