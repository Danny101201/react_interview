'use client'
import React, { ChangeEvent, useDeferredValue, useMemo, useState } from 'react'

const MAXMOUNT = 30000
export const DeferredValue = () => {
  const [value, setValue] = useState<string>('')
  const deferredValue = useDeferredValue<string>(value)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
  }

  const lists = useMemo(() => {
    let result: string[] = []
    for (let i = 0; i < MAXMOUNT; i++) {
      result.push(deferredValue)
    }
    return result
  }, [deferredValue])
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      {lists?.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
    </>
  )
}
