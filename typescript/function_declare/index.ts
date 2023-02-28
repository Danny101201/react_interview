const widgetGetter = () => "widget" as const;
const gadgetGetter = () => "gadget" as const;

declare function getDateObj<
  T,
  G extends Record<string, () => T>
>(getters: G): { [K in keyof G]: ReturnType<G[K]> }
declare function getDateArray<
  T,
  G extends ReadonlyArray<() => T>
>(getters: G): { [K in keyof G]: ReturnType<G[K]> }

const a1 = getDateObj({
  widget: widgetGetter,
  gadget: gadgetGetter,
} as const)
// const a1: {
//   readonly widget: "widget";
//   readonly gadget: "gadget";
// }

const a2 = getDateArray([ widgetGetter, gadgetGetter ] as const)
// const a2: readonly ["widget", "gadget"]