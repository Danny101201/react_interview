import React, { ComponentProps } from 'react'


type UnionsOfRelatedProps =
  Omit<React.Component, "type"> & (
    | {
      asChild: true
    } | {
      asChild: false,
      type: "button" | "submit" | "reset"
    }
  )
export const UnionsOfRelated = ({ }: UnionsOfRelatedProps) => {
  return (
    <div>UnionsOfRelatedProps</div>
  )
}
