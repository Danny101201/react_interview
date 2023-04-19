const date = new Date(Date.UTC(2022, 11, 20, 3, 23, 16, 738))
console.log(date.toISOString())

console.log(new Intl.DateTimeFormat('zh-CH', {
  dateStyle: 'full',
  timeStyle: 'long',
}).format(date))