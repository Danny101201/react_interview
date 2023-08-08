const makeKeyRemover = <Key extends string>(keys: Key[]) => <Obj>(obj: Obj): Omit<Obj, Key> => {
  return {} as any
}

const keyRemover = makeKeyRemover(['a', 'b'])
const filterObj = keyRemover({ a: "1", b: '2', c: '1' })
filterObj.c

type OBj1 = {
  a: string
  b: string
}

type Omitobj = Omit<OBj1, 'b'> 
// {
//   a: string;
// }