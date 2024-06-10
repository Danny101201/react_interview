/**
 * @param 
 * @returns {Function}
*/ 
const createHelloWorld = () => {
  return (...arg:any[]) => { 
return 'Hello world'
  }
}

const aaa = () => { 
  return '132'
}

function bbb() { 
  return '123'
}

/**
 * @param a - 第一個需要的數字
 * @param b - 第二個需要的數字
 * @returns {number} 兩數字之和
 * 
 * @example 
 * const sum = add(5, 7); // sum 將會等於 12
*/ 
const sum = (a:number,b:number) => a+ b