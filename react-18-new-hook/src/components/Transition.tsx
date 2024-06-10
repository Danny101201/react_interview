'use client'
import React, { ChangeEvent, useMemo, useState, useTransition } from 'react'

const MAXMOUNT = 30000
export const Transition = () => {
  const [isPending, startTransition] = useTransition()
  const [value, setValue] = useState<string>()
  const [lists, setLists] = useState<string[]>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    startTransition(() => {
      let result: string[] = []
      for (let i = 0; i < MAXMOUNT; i++) {
        result.push(value)
      }
      setLists(result)
    })
  }
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      {lists?.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
    </>
  )
}
