import { useRef } from "react"
import { useCounter } from "./useCounter"
import { useInterval } from "./useInterval"

interface UseTimerProps {
  enable?: boolean
}
export const useTimer = ({ enable = true }: UseTimerProps) => {
  const { count, minusCount, reset } = useCounter(10)
  const timerRef = useRef<NodeJS.Timeout>()
  useInterval({
    callback: () => {
      if (count === 0) {
        clearInterval(timerRef.current)
        return
      }
      minusCount()
    },
    ref: timerRef,
    enable
  })

  return { reset, count }
}