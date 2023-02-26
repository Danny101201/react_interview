import React, { useEffect, useState, use } from 'react'
interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
function BeforeFetch() {
  const [data, setDate] = useState<Post[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState()

  useEffect(() => {
    setIsLoading(true)
    setIsError(undefined)
    fetch('https://jsonplaceholder.typicode.com/comments?_page=2')
      .then(res => res.json())
      .then(setDate)
      .catch(setIsError)
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  if (isLoading) return <p>isloading .... </p>
  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}

export default BeforeFetch