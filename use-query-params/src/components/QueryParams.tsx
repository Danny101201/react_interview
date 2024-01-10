import { Color, ColorArrayParam, NumbedArrayParam } from '@/utils/param'
import React from 'react'
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params'

export const QueryParams = () => {
  const [query, setQuery] = useQueryParams({
    x: withDefault(NumberParam, 0),
    q: StringParam,
    numbers: NumbedArrayParam,
    color: ColorArrayParam
  })
  const { x, q, color } = query

  return (
    <div>
      <div>
        <label htmlFor="x">x</label>
        <input id="x" type="number" value={String(x)} onChange={e => {
          setQuery({ x: Number(e.target.value) })
        }} />
      </div>
      <div>
        <label htmlFor="q">q</label>
        <input id="q" type="text" value={q ?? ''} onChange={e => {
          setQuery({ q: e.target.value })
        }} />
      </div>
      <div>
        <label htmlFor="color">color</label>
        <select aria-label="Color" id="" value={color} onChange={e => setQuery({ color: e.target.value as Color }, 'replace')} defaultValue={Color.Red}>
          <option value={Color.Blue} >blue</option>
          <option value={Color.Green}>green</option>
          <option value={Color.Red} >red</option>
        </select>
      </div>
      <div className='flex flex-col gap-5'>
        <button onClick={() => {
          setQuery({
            numbers: [
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10)
            ]
          })
        }}>set numbers</button>
        <button onClick={() => {
          // replace all router query and  reserve router history
          setQuery({
            numbers: [
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10)
            ]
          }, 'push')
        }}>set push numbers</button>
        <button onClick={() => {
          // push router query and  reserve router history
          setQuery({
            numbers: [
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10)
            ]
          }, 'pushIn')
        }}>set pushIn numbers</button>
        <button onClick={() => {
          // replace router query and  replace router history
          setQuery({
            numbers: [
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10)
            ]
          }, 'replace')
        }}>set replace numbers</button>
        <button onClick={() => {
          // push router query and  replace router history
          setQuery({
            numbers: [
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10)
            ]
          }, 'replaceIn')
        }}>set replaceIn numbers</button>
      </div>

    </div>
  )
}
