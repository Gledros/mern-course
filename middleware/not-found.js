
const notFoundMiddleware = (request, response) => {
  response.status(404).send(`Not Found : ${request.originalUrl}`)
}

export default notFoundMiddleware