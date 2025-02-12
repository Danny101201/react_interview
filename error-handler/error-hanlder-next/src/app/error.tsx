'use client' // Error components must be Client Components

import { ErrorPage } from '@/components/ErrorPage'
import { APIError, APIErrorCode, getErrorTypeByErrorCode } from '@/utils/error'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string, statusCode: APIErrorCode }
  reset: () => void
}) {

  return (
    <div>
      <h2>Something went wrong!</h2>
      <ErrorPage error={new APIError({ type: getErrorTypeByErrorCode(error.statusCode), ...error })} />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}