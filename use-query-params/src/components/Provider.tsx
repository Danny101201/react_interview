import React, { PropsWithChildren } from 'react'
import { QueryParamProvider } from 'use-query-params'
import NextAdapterApp from 'next-query-params/app';
export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
  )
}
