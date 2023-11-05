import { CustomerError } from "./lib";

const main = async () => {
  try {
    throw new CustomerError('server', 'test error')
  } catch (e) {
    if (e instanceof CustomerError) {
      console.log(e.getErrorMessage())
      console.log(e.statueCode)
      console.log(e.name)
    }
  }
}
main()
