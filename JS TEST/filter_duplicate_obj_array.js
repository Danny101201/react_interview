const arr = [
  {
    name: 'John',
    location: 'Los Angeles',
  },
  {
    name: 'Kate',
    location: 'New York',
  },
  {
    name: 'Mike',
    location: 'New York',
  },
  {
    name: 'Mike',
    location: 'New York',
  },
];

console.log(1 == arr.findIndex(item => item.location === 'New York'))
console.log(2 == arr.findIndex(item => item.location === 'New York'))

const unique = arr.filter((item, i) => {
  return i === arr.findIndex(i => (i.location === item.location && i.name === item.name))
})
console.log(unique)