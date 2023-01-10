import React, { useId } from 'react'

function Form() {
  const emailId = useId()
  const saveId = useId()
  return (
    <form>
      <label htmlFor={emailId}>email</label>
      <input type="text" id={emailId} />
      <label htmlFor={saveId}>save</label>
      <input type="checkbox" id={saveId} />
    </form>
  )
}

export default Form