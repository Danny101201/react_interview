import React from 'react'

export default async function Seconds() {
  await new Promise((r) => setTimeout(r, 3000))
  return (
    <div>Component loaded after 3s</div>
  )
}

export const dynamic = 'force-dynamic'

