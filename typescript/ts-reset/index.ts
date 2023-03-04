import "@total-typescript/ts-reset";
const filterArray = [1, 2, undefined].filter(Boolean)

const result = JSON.parse("{}"); // unknown

fetch("/")
  .then((res) => res.json())
  .then((json) => {
    console.log(json); // unknown
  });

const validate = (input: unknown) => {
  if (Array.isArray(input)) {
    console.log(input); // unknown[]
  }
};

type Func = () => {
  id: string;
};
const func: Func = () => {
  return {
    id: "123",
    // No error on an excess property!
    name: 'danny'
  };
};


