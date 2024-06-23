type Records = {
  name: string,
  age: number,
  address: {
    region: string
    contractNumber: number,
  }
}
type MyReadonly2<T extends Record<string, any>> = {
  readonly [K in keyof T]: T[K]
}
type MyOptional<T extends Record<string, any>> = {
  [K in keyof T]?: T[K]
}
type MyRequire<T extends Record<string, any>> = {
  [K in keyof T]-?: T[K]
}
type MyRemoveReadonly<T extends Record<string, any>> = {
  -readonly [K in keyof T]: T[K]
}

type ReadOnlyResult = MyReadonly2<Records>
type RemoveReadonlyResult = MyRemoveReadonly<ReadOnlyResult>
type OptionalResult = MyOptional<Records>
type RequiredResult = MyRequire<OptionalResult>


type MappedTypeWithNewProperties<T extends Record<string, any>> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
}

type Person = {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = MappedTypeWithNewProperties<Person>
//   ^ 

type RemoveKindField<T extends Record<string, any>> = {
  [P in keyof T as Exclude<P, 'kind'>]: T[P]
}

type Circle = {
  kind: "circle";
  radius: number;
}
type KindlessCircle = RemoveKindField<Circle>


type EventConfig<Events extends { kind: string }> = {
  [E in Events as E['kind']]: (event: E) => void
}
type EventConfig2<Events extends { kind: string }> = {
  [E in Events['kind']]: (event: E) => void
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>
const test: Config = {
  circle: (a) => {
    // a.radius a.kind
  },
  square: (b) => {
    // b.kind b.x b.y
  },
}
type Config2 = EventConfig2<SquareEvent | CircleEvent>

type ExtractPII<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends { pii: true } ? true : false
}

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;


