const values = [1, 2, 3]
const sum_value = (values: number[]) => {
  let result = 0
  for (let i = 0; i < values.length; i++) {
    result += values[i]
  }
  return result
}

const sum_value2 = (values: number[]) => {
  if (values.length === 0) return 0
  const [head, ...rest] = values
  return head + sum_value2(rest)
}
console.log(sum_value2(values))