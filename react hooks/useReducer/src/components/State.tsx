import React, { useReducer } from 'react'
interface Address {
  street: string,
  block: string
}
function State() {
  const [state, dispatch] = useReducer((pre: Address, next: Partial<Address>) => {
    return { ...pre, ...next }
  }, {
    street: '',
    block: '',
  })
  return (
    <div>
      <div>street :{state.street}</div>
      <input type="text" value={state.street} onChange={(e) => dispatch({ street: e.target.value })} />
      <div>block :{state.block}</div>
      <input type="text" value={state.block} onChange={(e) => dispatch({ block: e.target.value })} />
    </div>
  )
}

export default State