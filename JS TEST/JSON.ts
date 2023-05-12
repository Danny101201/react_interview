let data = {
  a: 1,
  b: 2
}
function getData(needsValue, data) {
  return JSON.stringify(
    data,
    (key, value) =>
      key.match(/(a|b)/i) ? null : value
    , 2)
}

let user = {
  apiKey: 'sdfsdf',
  first: 'sdfsd',
  last: 'aaaa',
  password: 'sdfds'
}
function jsonExcludeData(keys: string[]) {
  return JSON.stringify(
    user,
    (key, val) => keys.includes(key) ? null : val,
    2
  )
}
function jsonSelectData(keys: string[]) {
  return JSON.stringify(
    user,
    keys,
    2
  )
}

console.log(jsonExcludeData(['apiKey', 'password']))
console.log(jsonSelectData(['apiKey', 'password']))

