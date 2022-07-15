import User from "../models/User.js";

const register = async (request, response) => {
  const user = await User.create(request.body);
  response.status(201).json({ user });
};

const login = (request, response) => {
  response.send("login user");
};

const updateUser = (request, response) => {
  response.send("update user");
};

export { register, login, updateUser };
