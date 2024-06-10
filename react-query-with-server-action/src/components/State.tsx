'use client'
import { getUser } from '@/action'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

export const State = () => {
  const [age, setAge] = useState<number>(0)
  const { data } = useQuery({
    queryKey: ['13'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
  })
  const { mutate } = useMutation({
    mutationFn: getUser,
    onSuccess: console.log
  })

  return (
    <>
      <pre>
        <code>
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
      <button onClick={() => mutate({ age })}>get User Data</button>
      <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
    </>
  )
}
