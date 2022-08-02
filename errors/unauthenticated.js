import { StatusCodes as HTTP } from 'http-status-codes'

class UnAuthenticatedError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = HTTP.UNAUTHORIZED
  }
}

export default UnAuthenticatedError
