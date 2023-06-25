// const http = require('http')
// const getUsers = require('./modules/users')

// const hostname = '127.0.0.1'
// const port = 3003

// const server = http.createServer((request, response) => {
//   const url = new URL(request.url, 'http://127.0.0.1')
//   const searchParams = url.searchParams

//   if (!searchParams.toString().length) {
//     response.statusCode = 200
//     response.statusMessage = 'OK'
//     response.setHeader('Content-Type', 'text/plain')
//     response.write('Hello, World!')
//     response.end()

//     return
//   }

//   for (let [key, value] of searchParams.entries()) {
//     switch (key) {
//       case 'users':
//         response.statusCode = 200
//         response.statusMessage = 'OK'
//         response.setHeader('Content-Type', 'application/json')
//         response.write(getUsers())
//         response.end()
//         break
//       case 'hello':
//         if (value) {
//           response.statusCode = 200
//           response.statusMessage = 'OK'
//           response.setHeader('Content-Type', 'text/plain')
//           response.write(`Hello, ${value}.`)
//           response.end()
//         } else {
//           response.statusCode = 400
//           response.setHeader('Content-Type', 'text/plain')
//           response.write('Enter a name')
//           response.end()
//         }
//         break
//       default:
//         response.statusCode = 500
//         response.end()
//         break
//     }
//   }
// })

// server.listen(port, hostname, () => {
//   console.log(`Сервер запущен по адресу http://${hostname}:${port}/`)
// })

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRouter = require('./routes/users')

dotenv.config()

const {
  PORT = 3000,
  API_URL = 'http://127.0.0.1',
  MONGO_URL = 'mongodb://127.0.0.1:27017/backend',
} = process.env

mongoose.connect(MONGO_URL).catch((error) => console.error(error))

const app = express()

const helloWorld = (req, res) => {
  response.status(200)
  response.send('Hello, World')
}

app.use(cors)
app.use(bodyParser.json())
app.use(userRouter)

app.get('/', helloWorld)

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
})
