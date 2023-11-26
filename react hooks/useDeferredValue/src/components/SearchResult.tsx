import React, { use, useDeferredValue } from 'react'

interface SearchResultProps {
  search: string
}
export const SearchResult = ({ }: SearchResultProps) => {
  const result = use(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))
  console.log(result)
  return (
    <div>State</div>
  )
}

