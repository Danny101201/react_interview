import React from 'react'
interface SearchProps {
  search: string
}
export const SlowList = ({ search }: SearchProps) => {
  let items = []
  for (let i = 0; i < 100; i++) {
    items.push(<SlowItem key={i} text={search} />)
  }

  return (
    <ul>
      {items}
    </ul>
  )
}
interface SlowItemProps {
  text: string
}
const SlowItem = ({ text }: SlowItemProps) => {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) { }
  return (
    <li>{text}</li>
  )
}