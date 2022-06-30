const errorHandlerMiddleware = (error, request, response, next) => {
  console.log(error);
  response.status(500).json({ message: "Something went wrong" });
};

export default errorHandlerMiddleware;
