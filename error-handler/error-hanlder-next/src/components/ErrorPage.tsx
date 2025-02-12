import { APIError } from '@/utils/error'
import React from 'react'

interface ErrorPageProps {
  error: APIError
}
export const ErrorPage = ({ error }: ErrorPageProps) => {
  const { name, statusCode, message, description } = error || {}
  return (
    <div>
      <h1>name : {name}</h1>
      <p>statusCode : {statusCode}</p>
      <p>message : {message}</p>
      <p>description : {description}</p>
    </div>
  )
}
