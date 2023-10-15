class HashTable<Tvalue> {
  private table: Array<Array<[string, Tvalue]> | undefined>
  private size: number
  constructor(size: number) {
    this.table = new Array(size)
    this.size = size
  }
  setItem(key: string, value: Tvalue) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (!bucket) {
      this.table[index] = [[key, value]]
    } else {
      const sameKey = bucket.find((item) => item[0] === key)
      if (sameKey) {
        sameKey[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }
  getItem(key: string) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const sameKey = bucket.find(item => item[0] === key)
      if (sameKey) {
        return sameKey[1]
      }
    }

    return undefined

  }
  hash(key: string) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }
  removeItem(key: string) {
    const index = this.hash(key)
    let bucket = this.table[index]
    if (bucket) {
      const sameKey = bucket.find(item => item[0] === key)

      if (sameKey) {
        // this.table[index] = bucket.filter(item => item[0] !== key)
        bucket.splice(bucket.indexOf(sameKey), 1)
      }
    }
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }
}

const myTable = new HashTable(100)
myTable.setItem('name', 'Danny')
myTable.setItem('name2', 'louis')
myTable.setItem('name3', 'louis')
myTable.setItem('name4', 'louis4')
myTable.setItem('4name', 'louis5')
myTable.removeItem('4name')
// console.log(myTable.getItem('4name'))
myTable.display()
// myTable.setItem('1', '21')
// myTable.setItem('2', '22')
// myTable.setItem('3', '23')
// console.log(myTable.getItem('3'))

