const register = (request, response) => {
  response.send("register user");
};

const login = (request, response) => {
  response.send("login user");
};

const updateUser = (request, response) => {
  response.send("update user");
};

export { register, login, updateUser };
