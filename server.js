import express from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (request, response) => {
  throw new Error('This is a test error')
})

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})