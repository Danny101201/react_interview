interface Person {
  name: string;
  age: number;
  address?: {
    street: string;
    city: string;
    state: string;
  }
}

// function hasAddress(person: Person): person is Person & { address: object } {
//   return person.address !== undefined
// }
//檢查person是否有address type，透過type guard我們可以改變person型別，本欄address的型別是optional現在是有address
function hasAddress(person: Person): person is (Person & { address: object }) {
  return person.address !== undefined
}

function getAddress(person: Person): string {
  if (hasAddress(person)) {
    return `${person.address.street}, ${person.address.city}, ${person.address.state}`;
  }
  throw new Error("Person does not have an address. ");
}

//switch
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shapes = Circle | Square | Rectangle;


function area(shape: Shapes): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}


//require age type
interface Persons {
  name: string;
  age?: number;
}

type AgeRequired<T> = T extends { age: any } ? T : T & { age: number }

interface RequiredPerson extends AgeRequired<Persons> { }
const dsfds: RequiredPerson = {
  name: 'Danny',
  age: 10
}

//optional address type
interface Person3 {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  }
}

type OptionalAddress<T> = {
  [k in keyof T]: k extends 'address' ? Partial<T[k]> : T[k]
}

interface PersonWithOptionalAddress extends OptionalAddress<Person3> { }


//
type Objperson = {
  a: '1'
}

type ObjpersonPartial = Partial<Objperson>