import React, { ReactElement, ReactNode } from 'react'
//  ReactElement is a type that let you invoke a function like <Component/> in JSX
// ReactNode is plus by ReactElement all th things like string numbers or numbers

// correct
export const Correct = (props: { children: ReactNode }) => {
  return <h1 className="text-2xl font-bold">{props.children}</h1>
}
// incorrect
export const Incorrect = (props: { children: ReactElement }) => {
  return <h1 className="text-2xl font-bold">{props.children}</h1>
}


