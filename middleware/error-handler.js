const errorHandlerMiddleware = (error, request, response, next) => {
  console.log(error);
  response.status(500).json({ message: error });
};

export default errorHandlerMiddleware;
