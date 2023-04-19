import { pipe, flow } from "fp-ts/lib/function";

const trim = (s: string) => s.trim()
const size = (s: string) => s.length
const isAtLeast3 = (n: number) => n >= 3
const validate = (s: string) => pipe(
  s,
  trim,
  size,//5
  isAtLeast3,
)// evaluate to 5
const validate2 = flow(
  trim,
  size,//5
  isAtLeast3,
)
// same as 
isAtLeast3(size(trim('hello')))
validate('hello') 
validate2('hello')

const flows = <A,B,C>(
  f:(a:A)=>B,
  g:(b:B)=>C
)=>
(a:A):C=>g(f(a))
const pipes = <A,B,C>(
  a:A,
  f:(a:A)=>B,
  g:(b:B)=>C
):C=> g(f(a))