import User from "../models/User.js";
import { StatusCodes as HTTP } from "http-status-codes";

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.code = HTTP.BAD_REQUEST;
    this.errors = [];
  }
}

const register = async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    throw new CustomAPIError("Please provide all the values");
  }

  const user = await User.create(request.body);
  response.status(HTTP.OK).json({ user });
};

const login = (request, response) => {
  response.send("login user");
};

const updateUser = (request, response) => {
  response.send("update user");
};

export { register, login, updateUser };
