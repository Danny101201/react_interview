import { useRef, useEffect } from 'react'
export const usePreview = <T>(value: T) => {
  const currentValue = useRef<T>(value)
  const prevValue = useRef<T>()
  if (currentValue.current !== value) {
    prevValue.current = currentValue.current
    currentValue.current = value
  }
  return {
    current: currentValue.current,
    preView: prevValue.current
  } as {
    current: T,
    preView: T,
  }
}