const deepFreeze = (obj: Record<string, any>) => {
  Object.keys(obj).forEach(p => {
    if (typeof obj[p] === 'object' && !Object.isFrozen(obj[p])) {
      deepFreeze(obj[p])
    }
  })
  return Object.freeze(obj)
}

const obj = {
  name: 'name',
  info: {
    age: 24,
    email: 'hiunji@gmail.com'
  }
}
// Object.freeze(obj)
deepFreeze(obj)
obj.name = '123'
obj.info.age = 25
console.log(obj)