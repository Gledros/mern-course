import { StatusCodes as HTTP } from "http-status-codes";

const errorHandlerMiddleware = (error, request, response, next) => {
  console.log(error);
  let errorData;

  if (error.code && error.code === 11000) {
    errorData = {
      code: HTTP.BAD_REQUEST,
      message: `${Object.keys(error.keyValue)} field has to be unique`
    };
  } else {
    const defaultError = {
      code: HTTP.INTERNAL_SERVER_ERROR,
      message: "Something went wrong, try again later"
    };

    errorData =
      {
        ValidationError: {
          code: HTTP.BAD_REQUEST,
          message: Object.values(error.errors)
            .map(currentError => currentError.message)
            .join(". ")
        }
      }[error.name] || defaultError;
  }

  response.status(errorData.code).json({ message: errorData.message });
};

export default errorHandlerMiddleware;
