import { StatusCodes as HTTP } from 'http-status-codes'

class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = HTTP.NOT_FOUND
  }
}

export default NotFoundError
