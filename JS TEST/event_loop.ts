console.log('start')
process.nextTick(() => {
  console.log('nextTick')
})
setTimeout(() => {
  console.log('setTimeout')
}, 0)

//promise出使建立是同步所以裡頭的call back會同步執行
new Promise((resolve, reject) => {
  console.log('Promise')
  resolve('resolve')
})
  .then(console.log);

(async () => {
  console.log('async')
})();
setImmediate(() => {
  console.log('setImmediate')
});
process.nextTick(async () => {
  console.log('nextTick async')
})
console.log('end')

//start Promise async end resolve nextTick nextTick async