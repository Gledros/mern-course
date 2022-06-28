import express from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.use(notFoundMiddleware)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})