
type params1 = { value: number, greeting: string }
type params2 = { value: number }
type Fn1 = ({ value, greeting }: params1) => string
type Fn2 = ({ value }: params2) => number

const fn1: Fn1 = ({ value, greeting }) => {
  return greeting + Number(greeting);
}

const fn2: Fn2 = ({ value }) => {
  return Number(value);
}
const isFn1 = (fn: Fn1 | Fn2): fn is Fn1 => {
  return fn === fn1
}
const hasGreetParams = (arg: params1 | params2): arg is params1 => {
  return Object.keys(arg).includes('greeting')
}
function provider(firstOrSecond: boolean) {
  return {
    msgWithMaybeNumber: firstOrSecond ? fn1 : fn2
  };
}
const firstOrSecond = () => Math.floor(1 + Math.random() * 2) % 2 === 0;
const ta = provider(firstOrSecond());
const params: [{ greeting: string }, { value: number }] = [{ greeting: 'hello' }, { value: 55688 }];
const handler = {
  apply(args: Parameters<typeof fn1>[number] | Parameters<typeof fn2>[number]) {
    const fn = ta['msgWithMaybeNumber']

    if (isFn1(fn)) {
      if (hasGreetParams(args)) {
        fn(args)
      }
    } else {
      fn(args)
    }
  },
};