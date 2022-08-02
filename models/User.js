import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 20,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email'
    }
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 6
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 20,
    default: 'Smith'
  },
  location: {
    type: String,
    trim: true,
    maxLength: 20,
    default: 'my city'
  }
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY
  })
}

UserSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password)
  return isMatch
}

export default mongoose.model('User', UserSchema)
