const dateNowStartTime = Date.now()
setTimeout(() => {
  const dateNowFinishTime = Date.now()
  console.log(`Benchmark took (Date.now) ${(dateNowFinishTime - dateNowStartTime) / 1000}s `);
}, 1000)
const performanceStartTime = performance.now()
setTimeout(() => {
  const performanceFinishTime = performance.now()
  console.log(`Benchmark took (performance,now) ${(performanceFinishTime - performanceStartTime) / 1000}s `);
}, 1000)

const NS_PER_SEC = 1e9;
const time = process.hrtime(); // First call, returns the initial `time` variable
// [ 1800216, 25 ]

setTimeout(() => {
  const diff = process.hrtime(time); // Use the first returned `time` as input for the second call to calculate the time difference
  // [ 1, 552 ]

  console.log(`Benchmark took (hrtime) ${(diff[0] * NS_PER_SEC + diff[1]) / (1000 * 1000 * 1000)}s `);
  // Benchmark took 1000000552 nanoseconds
}, 1000);

const start = process.hrtime.bigint();
// 191051479007711n

setTimeout(() => {
  const end = process.hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${end - start} nanoseconds`);

  console.log(`Benchmark took (hrtime bigint) ${(end - start) / 1000000000n}s `);
  // Benchmark took 1154389282 nanoseconds
}, 1000);