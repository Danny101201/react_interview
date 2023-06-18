// @ts-expect-error ✅ this type-checks because
let x: number = "Hello"; // this line does not.

// @ts-expect-error ❌ this doesn't type-check because
let y: number = 2; // this line does!



namespace identity {

  function identity<T>(a: T): T {
    return a;
  }

  let input1 = 10;
  let res1 = identity(input1);

  type test1 = Expect<Equal<typeof res1, number>>;

  let input2 = "Hello";
  let res2 = identity(input2);

  type test2 = Expect<Equal<typeof res2, string>>;

}