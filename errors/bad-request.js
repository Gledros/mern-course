import { StatusCodes as HTTP } from 'http-status-codes'

class BadRequestError extends Error {
  constructor(message) {
    super(message)
    this.code = HTTP.BAD_REQUEST
  }
}

export default BadRequestError
