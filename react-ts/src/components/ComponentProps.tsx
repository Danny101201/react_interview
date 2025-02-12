import React, { ComponentProps } from 'react'

export const Correct = (props: ComponentProps<'button'>) => {
  return (
    <button {...props} />
  )
}
export const Incorrect = ({
  variant,
  ...props
}: {
  variant: "primary"
  type: string
  className: string
}) => {
  return (
    <button className={variant === "primary" ? "bg-blue-500" : ""} {...props} />
  )
}
