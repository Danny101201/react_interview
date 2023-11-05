export class CustomerError extends Error {
  statueCode = 400
  static typeCode = {
    validation: 400,
    unauthorized: 401,
    server: 500
  }
  constructor(type: keyof typeof CustomerError.typeCode, message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomerError.prototype)
    this.name = Error.name
    this.statueCode = CustomerError.typeCode[type]
    Error.captureStackTrace(this)
  }
  getErrorMessage() {
    return 'Something went wrong: ' + this.message
  }
}