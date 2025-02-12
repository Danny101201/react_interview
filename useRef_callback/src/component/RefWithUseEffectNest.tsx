import React, { forwardRef, useEffect, useState } from 'react'

export const RefWithUseEffectNest = () => {
  const ref = React.useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])
  return (
    <Form ref={ref} />
  )
}


const Form = forwardRef<HTMLInputElement>((props, ref) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <form >
      <button type='button' onClick={() => setShow(true)}>
        show
      </button>
      {show && <input ref={ref} />}
    </form>
  )
})