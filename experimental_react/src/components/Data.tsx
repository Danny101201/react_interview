import React, { use } from 'react'


interface DataProps {
  url: string,
  shouldFetch: boolean
  hasError: boolean
}

const getData = (url: string) => fetch(url)
  .then(res => res.json())

function Data({ url, shouldFetch, hasError }: DataProps) {
  let data = 'default data'

  if (shouldFetch) {
    data = use(getData(url))
  }
  if (hasError) {
    throw new Error('hasError')
  }

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default Data