let english = new Intl.RelativeTimeFormat('en-es', {
  style: 'long',
  numeric: 'always'
})

const DIVISIONS = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' }
]
let Dates = new Date()
let formate = new Intl.RelativeTimeFormat(undefined, {
  style: 'long',
  numeric: 'always'
})
const formatTimeAgo = (date) => {

  let durations = (new Date() - date) / 1000
  for (let DIVISION of DIVISIONS) {
    if (Math.abs(durations) < DIVISION.amount) {
      return formate.format(durations, DIVISION.name)
    }
    durations /= DIVISION.amount
  }
  console.log(durations)
}
console.log(formatTimeAgo(Dates.setMinutes(1)))
