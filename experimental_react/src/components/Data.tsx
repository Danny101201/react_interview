import React, { use } from 'react'


interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string) => fetch(url)
  .then(res => res.json())
  
function Data({ url }: { url: string }) {
  //data will not be undefined ,because use will be trigger before react render
  const data = use<Post[]>(getData(url))
  return (
    <div>{
      JSON.stringify(data, null, 2)}
    </div>
  )
}

export default Data