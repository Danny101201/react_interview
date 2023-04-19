import lodash from 'lodash';
const data = {
  name: 'Danny',
  age: 20,
  address: {
    street: 'aaa',
    date: new Date()
  },
  foo: () => true
}

console.time('JSON')
const clone1 = JSON.parse(JSON.stringify(data));
console.timeEnd('JSON')
console.time('cloneDeep')
const clone2 = lodash.cloneDeep(data)
console.timeEnd('cloneDeep')
console.time('structuredClone')
const clone3 = structuredClone(data)
console.timeEnd('structuredClone')

// compare date data 
// JSON.stringify  print string 
// cloneDeep  print new Date() 
// structuredClone print new Date() 

console.log(typeof clone1.address.date)//string
console.log(typeof clone2.address.date)//object
console.log(typeof clone3.address.date)//object

// compare function data 
// JSON.stringify  can't copy  
// cloneDeep  can copy 
// structuredClone DataCloneError 

console.log(clone1.foo) //undefined
console.log(clone2.foo) //[Function: foo]
console.log(clone3.foo) //[DataCloneError]: ()=>true could not be cloned.


// time
// JSON: 0.678ms
// cloneDeep: 0.232ms
// structuredClone: 0.151ms