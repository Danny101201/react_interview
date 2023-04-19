import { compose } from "./utils"

function DivideTwoIfEven(num: number): number {
  if (num === 0) {
    throw new Error('cann;t decive by zero')
  } else if (num % 2 !== 0) {
    throw new Error('num is noe Even')
  } else {
    return 2 / num
  }
}

type Eiter<E, A> = Left<E> | Right<A>

interface Left<E> {
  _tag: 'left'
  left: E
}
interface Right<A> {
  _tag: 'right'
  right: A
}

const left = <E, A = never>(e: E): Eiter<E, A> => ({
  _tag: 'left',
  left: e
})
const right = <A, E = never>(r: A): Eiter<E, A> => ({
  _tag: 'right',
  right: r
})

function DivideTwoIfEven2(num: number): Eiter<string, number> {
  if (num === 0) {

    return left('cann;t decive by zero')
  } else if (num % 2 !== 0) {

    return left('num is noe Even')
  } else {
    return right(2 / num)
  }
}
const isLeft = <E, A>(x: Eiter<E, A>): x is Left<E> => x._tag === 'left'
console.log(DivideTwoIfEven2(2))

const incrementOne = (x: number) => x + 1

const composed = compose(
  (x: Eiter<string, number>) => isLeft(x) ? x : right(incrementOne(x.right)),
  DivideTwoIfEven2
)

console.log(composed(1))