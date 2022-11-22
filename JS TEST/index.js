// ### JS Test

// For any question of this document, we aren't waiting for a number or answer, but we are waiting for javascript functions.

// Make a git public repo or add @loiu92 to your private repos.

// #### Assuming we have an array of factories

const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
];
// ex.1
let EmployeesNumber = factories.map(item => ({ name: item.name, count: item.employees.length }))

// ex.2
function getFactoriesNumberByEmployee() {
  let result =
    factories
      .reduce((acc, item) => acc.concat(item.employees), [])
      .reduce((acc, name) => {
        const findIndex = acc.findIndex(i => i.employee === name)
        if (findIndex === -1) {
          acc.push({
            employee: name,
            count: 1
          })
        } else {
          acc[findIndex].count++
        }
        return acc
      }, [])
  console.log(result)
}
getFactoriesNumberByEmployee()
// ex.3
let OrderEmployeesName = factories.map(item => ({
  name: item.name,
  employees: item.employees.sort((a, b) => a.localeCompare(b))
}))
// 1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
// 2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
// 3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }


// #### Assuming we have a different array

const employeeType = [
  { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },//8
  { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },//9
  { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },//4
];

const employees = [
  { id: 1, name: "Alice", type: 2 },//9
  { id: 2, name: "Bob", type: 3 },//4
  { id: 3, name: "John", type: 2 },//9
  { id: 4, name: "Karen", type: 1 },//8
  { id: 5, name: "Miles", type: 3 },//4
  { id: 6, name: "Henry", type: 1 }//8
];

const tasks = [
  { id: 1, title: "task01", duration: 60 },
  { id: 2, title: "task02", duration: 120 },
  { id: 3, title: "task03", duration: 180 },
  { id: 4, title: "task04", duration: 360 },
  { id: 5, title: "task05", duration: 30 },
  { id: 6, title: "task06", duration: 220 },
  { id: 7, title: "task07", duration: 640 },
  { id: 8, title: "task08", duration: 250 },
  { id: 9, title: "task09", duration: 119 },
  { id: 10, title: "task10", duration: 560 },
  { id: 11, title: "task11", duration: 340 },
  { id: 12, title: "task12", duration: 45 },
  { id: 13, title: "task13", duration: 86 },
  { id: 14, title: "task14", duration: 480 },
  { id: 15, title: "task15", duration: 900 }
];

// ex.4
function getTotalHours() {
  let workTypeInfo = employeeType.map(({ work_begin, work_end, ...rest }) => {
    let [be_hour, be_minute, be_second] = work_begin.split(':')
    let [en_hour, en_minute, en_second] = work_end.split(':')
    if (be_hour === '00') be_hour = '24'
    if (en_hour === '00') en_hour = '24'
    let betweenTimes = (new Date().setHours(be_hour, be_minute, be_second) - new Date().setHours(en_hour, en_minute, en_second))
    let durationHours = Math.abs((betweenTimes / 1000 / 60 / 60))
    return {
      ...rest,
      durationHours
    }
  })
  let result = employees.reduce((acc, item) => {
    let workType = workTypeInfo.find(type => type.id === item.type)
    return acc + workType.durationHours
  }, 0).toFixed(1)
  console.log(result)
}
getTotalHours()

// ex.5
function howManyEmployeeByTime(time) {
  if (!(time instanceof Date)) {
    console.error("parameter must a date type");
    return null;
  }
  const formattedTime = time.getHours();

  const formattedType = employeeType.map((type) => ({
    type: type.id,
    startNumber: +type.work_begin.slice(0, 2),
    endNumber: +type.work_end.slice(0, 2) || 24
  }));
  console.log(formattedType)
  let timeForEmployeeTypes = formattedType.filter(type => {
    return (formattedTime >= type.startNumber) && (formattedTime <= type.endNumber)
  }).map(item => item.type)
  console.log(timeForEmployeeTypes)
  return employees.reduce((acc, current) => {
    if (timeForEmployeeTypes.includes(current.type)) {
      acc += 1
    }
    return acc
  }, 0)
}
console.log(howManyEmployeeByTime(new Date(new Date().setHours(13))))
// 4. Count total hours worked in 1 toDay ? // => 39
//   5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int

// ex.6
function getTaksOfDays() {
  let workingHoursOfTheDay = 15
  let totalTime = ((tasks.reduce((acc, item) => acc + item.duration, 0) / 60) / workingHoursOfTheDay).toFixed(2)
  console.log(totalTime)
}
getTaksOfDays()
// 6. How many days of work needed to done all tasks ? // => 1 toDay = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.