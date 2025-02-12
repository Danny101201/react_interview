import React, { forwardRef, useEffect, useState } from 'react'

export const RefWithUseCallbackNest = () => {
  const ref = React.useRef<HTMLInputElement>(null)
  return (
    <Form ref={ref} />
  )
}


const Form = forwardRef<HTMLInputElement>((props, ref) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <form >
      <button type='button' onClick={() => setShow(value => !value)}>
        {show ? 'hidden' : 'show'}
      </button>
      {show && <input ref={node => {
        node?.focus()
      }} />}
    </form>
  )
})