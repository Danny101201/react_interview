enum ObjKey {
  black = 'black',
  white = 'white',
}

type ColorText<k extends ObjKey> = `color.${k}`
const Obj: { [k in ObjKey]: ColorText<k> } = {
  black: 'color.black',
  white: 'color.white'
}