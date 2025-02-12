import React, { ComponentProps } from 'react'

interface OmitOverWriteProps extends  Omit<ComponentProps<'button'>,'className'>
{
    variant: "primary" | "secondary" 
}
export const OmitOverWrite = ({ }: OmitOverWriteProps) => {
  return (
    <div>OmitOverWrite</div>
  )
}
