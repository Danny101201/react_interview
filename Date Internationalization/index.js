const english = new Intl.RelativeTimeFormat('en-us', {
  style: 'long',
  numeric: 'always'
})
const spanish = new Intl.RelativeTimeFormat('en-es', {
  style: 'narrow'
})
const inferred = new Intl.RelativeTimeFormat(undefined)

const DIVISIONS = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' }
]
let TwoDayAgo = english.format(10, 'year')
console.log(TwoDayAgo)
// create an sample function
const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: 'auto'
})
function formatTimeAgo(date) {
  let duration = (date - new Date()) / 1000
  for (division of DIVISIONS) {
    console.log(division.name, Math.abs(duration))
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}

console.log(formatTimeAgo(new Date().setMonth(10)))
