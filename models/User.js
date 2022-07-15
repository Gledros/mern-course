import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 20,
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email"
    }
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 20,
    default: "Smith"
  },
  location: {
    type: String,
    trim: true,
    maxLength: 20,
    default: "my city"
  }
});

export default mongoose.model("User", UserSchema);
