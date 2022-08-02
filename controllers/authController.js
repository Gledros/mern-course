import User from '../models/User.js'
import { StatusCodes as HTTP } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const register = async (request, response) => {
  const { name, email, password } = request.body

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all the values')
  }

  let user = await User.create(request.body)
  const token = user.createJWT()

  response.status(HTTP.CREATED).json({
    user,
    token,
    location: user.location
  })
}

const login = async (request, response) => {
  const { email, password } = request.body

  if (!email || !password) {
    throw new BadRequestError('Please provide all the values')
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    throw new UnAuthenticatedError('Invalid email')
  }

  const passwordMatch = await user.comparePassword(password)

  if (!passwordMatch) {
    throw new UnAuthenticatedError('Invalid password')
  }

  const token = user.createJWT()
  user.password = undefined

  response.status(HTTP.OK).json({
    user,
    token,
    location: user.location
  })
}

const updateUser = (request, response) => {
  response.send('update user')
}

export { register, login, updateUser }
