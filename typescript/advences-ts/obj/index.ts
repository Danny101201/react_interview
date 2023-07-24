const myObj: Record<string, string[]> = {}

// this will cause runtimeError but ts can't check , so you need config  noUncheckedIndexedAccess: true in tsconfig.json
myObj.foo.push('111')

// instead above you can use if 

if (myObj.foo) {
  myObj.foo.push('111')
}