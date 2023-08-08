import React from 'react'
type BaseItemType = {
  name: string
}
interface GenerticProps<Tdata> {
  items: Tdata[],
  filterFn: (items: Tdata) => boolean
}
function Genertic<Tdata extends BaseItemType>({
  items,
  filterFn
}: GenerticProps<Tdata>) {
  const filterData = items.filter(filterFn)
  return (
    <>
      {filterData.map(item => (
        <div>
          {item.name}
        </div>
      ))}
    </>
  )
}

export default Genertic

const test = () => {
  return (
    <Genertic
      items={[
        { name: 'name1', age: 10 }
      ]}
      filterFn={(item) => item.name === 'Danny'}
    />
  )
}