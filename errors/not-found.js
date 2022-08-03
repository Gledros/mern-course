import { StatusCodes as HTTP } from 'http-status-codes'

class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.code = HTTP.NOT_FOUND
  }
}

export default NotFoundError
