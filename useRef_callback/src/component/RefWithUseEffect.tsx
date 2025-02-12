import React, { useEffect } from 'react'

export const RefWithUseEffect = () => {
  const ref = React.useRef<HTMLInputElement>(null)
  useEffect(() => {
    ref.current?.focus()
  }, [])
  return (
    <input type="text" ref={ref} />
  )
}
