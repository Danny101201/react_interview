import React, { useCallback, useState } from 'react'

export const GetElement = () => {
  const [elementHeight, setElementHeight] = useState<number>(0)
  const measuredRef = useCallback<(node: HTMLHeadingElement) => void>(node => {
    setElementHeight(node.getBoundingClientRect().height)
  }, [])
  
  return (
    <div>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(elementHeight)}px tall</h2>
    </div>
  )
}

