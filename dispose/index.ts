{
  const getResource = () => {
    return {
      [Symbol.dispose]: () => {
        console.log('離開拉!')
      }
    }
  }
  using resource = getResource();
}
const conect = async () => {
  const db = await connectDB()
  return {
    db,
    [Symbol.asyncDispose]: () => db.close()
  }
}

{
  using { db } = await conect()
}