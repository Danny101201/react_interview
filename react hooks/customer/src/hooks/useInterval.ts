import { MutableRefObject, useEffect, useRef } from "react"
interface UseIntervalProps {
  callback: () => void
  ref: MutableRefObject<NodeJS.Timeout | undefined>
  enable?: boolean
  delay?: number
}
export const useInterval = ({ callback, ref, enable, delay = 1000 }: UseIntervalProps) => {
  const callBackRef = useRef<() => void>()
  useEffect(() => {
    callBackRef.current = callback
  }, [callback])
  useEffect(() => {
    ref.current = setInterval(() => {
      if (callBackRef.current === undefined) return
      if (!enable) {
        clearInterval(ref.current)
        return
      }
      callBackRef.current()
    }, delay)

    return () => {
      clearInterval(ref.current)
    }
  }, [delay, callback, enable])
}