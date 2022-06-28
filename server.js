import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'


// Middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const PORT = process.env.PORT || 4000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()