import React, { ChangeEvent } from 'react'
import { NumberParam, StringParam } from 'serialize-query-params'
import { useQueryParam } from 'use-query-params'

export const QueryParam = () => {
  const [num, setNum] = useQueryParam('number', NumberParam)
  const [name, setName] = useQueryParam('name', StringParam)
  const handleChangeNameQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleChangeNumberQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value))
  }
  return (
    <>
      <div>
        <label htmlFor="name">name</label>
        <input id="name" type="text" value={name as string} onChange={handleChangeNameQuery} />
      </div>
      <div>
        <label htmlFor="number">number</label>
        <input id="number" type="number" value={String(num)} onChange={handleChangeNumberQuery} />
      </div>
    </>
  )
}
