import React, { ElementType, PropsWithChildren } from 'react'

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-small"
  | "small";
interface TypographyProps extends PropsWithChildren {
  variant: Variant
  className?: string
  as?: ElementType
}
const sizes: { [key in Variant]: string } = {
  h1: "text-5xl font-bold sm:text-4xl",
  h2: "text-4xl font-bold sm:text-3xl",
  h3: "text-3xl font-bold sm:text-2xl",
  h4: "text-2xl font-bold sm:text-1xl",
  h5: "text-xl font-bold sm:text-lg",
  body: "text-lg sm:text-md",
  "body-small": "text-md sm:text-sm",
  small: "text-sm sm:text-xs"
};
const tags: { [key in Variant]: ElementType } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span"
};
export const Typography = ({ variant, children, as, className }: TypographyProps) => {
  const sizeClasses = sizes[variant]
  const Tag = as || tags[variant]
  return (
    <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>
  )
}
