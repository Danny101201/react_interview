import React, { useState, useImperativeHandle, forwardRef, Ref } from 'react'

export const Loading = forwardRef((
  props,
  ref
) => {
  const [Loading, setLoading] = useState(false)
  const startLoading = () => {
    setLoading(true)
  }
  const endLoading = () => {
    setLoading(false)
  }

  useImperativeHandle(ref, () => {
    return {
      startLoading,
      endLoading
    }
  })
  return (
    <div>{Loading ? 'Loading' : 'loadingEnd'}</div>
  )
})

