import React from 'react'

// type Size = "sm" | "md" | Omit<string, "sm" | "md">
type Sizesss = "sm" | "md"

type Size = LooseAuthComplete<"sm" | "md">
type LooseAuthComplete<T extends string> = Omit<string, T> | T
interface IconProps {
  size: Size
}


const Icon = ({ }: IconProps) => {
  return (
    <></>
  )
}


const Another = () => {
  return (
    <>
      <Icon size='md' />
      <Icon size='sm' />
    </>
  )
}


type FN = (...args: [name: string, age: number]) => void



