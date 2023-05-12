async function async1() {
  console.log(1);
  await console.log(2);

  console.log(3);
  console.log(9);
}

console.log(4);

async1();

setTimeout(() => {
  console.log(5);
}, 0);

new Promise((resolve) => {
  console.log(6);
  resolve();
}).then(() => {
  console.log(7);
  console.log(8);
});

// 4 1 2  6 3 9  7 8  5