const getVoteRange = (age) => {
  switch (true) {
    case (age < 18):
      throw new Error('voter under 18 is not allow')
      break;
    case (age >= 18 && age <= 25):
      return "numYoung"
      break;
    case (age >= 26 && age <= 35):
      return "numMid"
      break;
    case (age >= 36 && age <= 55):
      return "numOld"
      break;
    default:
      throw new Error('too old')
      break;
  }
}


var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

function voterResults() {
  const result = voters.reduce((acc, item) => {
    const voterAgeAlias = getVoteRange(item.age)
    if (!Object.keys(acc).includes(voterAgeAlias + 'People')) {
      acc[voterAgeAlias + 'People'] = 1
      acc[voterAgeAlias + 'Votes'] = item.voted ? 1 : 0
    } else {
      acc[voterAgeAlias + 'People']++
      acc[voterAgeAlias + 'Votes'] += item.voted ? 1 : 0
    }
    return acc
  }, {})

  return result
}


