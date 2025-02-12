import Link from 'next/link'
import { headers } from 'next/headers'
import { ErrorPage } from '@/components/ErrorPage'
import { APIError } from '@/utils/error'

export default async function NotFound() {
  return (
    <ErrorPage error={new APIError({ type: 'notFound' })} />
  )
}