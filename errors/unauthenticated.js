import { StatusCodes as HTTP } from 'http-status-codes'

class UnAuthenticatedError extends Error {
  constructor(message) {
    super(message)
    this.code = HTTP.UNAUTHORIZED
  }
}

export default UnAuthenticatedError
