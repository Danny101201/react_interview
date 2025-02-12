import React from 'react'

declare function cn(...args: Array<unknown>): string
interface IntersectionsAndConditionProps extends React.ComponentProps<"button"> {
  variant: "primary" | "secondary"
}
export const IntersectionsAndCondition = ({
  variant,
  className,
  ...props
}: IntersectionsAndConditionProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-blue-500",
        variant === "secondary" && "bg-gray-500",
        className,
      )}
    />
  )
}
