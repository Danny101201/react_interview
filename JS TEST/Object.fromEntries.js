const mapObj = new Map()

mapObj.set('a', { name: 'danny' })

console.log(Object.fromEntries(mapObj)) // { a: { name: 'danny' } }


const info = {
  name: 'danny',
  salary: 1000
}

const addInoSalary = (value) => {

  let result = Object.fromEntries(Object.entries(info).map(([k, v]) => k === 'salary' ? [k, v + value] : [k, v]))
}

addInoSalary(100)