import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import prisma from './lib/prisma'
import path from 'path'
require('dotenv').config()
// import https from 'https'
// import fs from 'fs'

const HTTP_PORT = process.env.HTTP_PORT || 8080
// const HTTPS_PORT = process.env.HTTPS_PORT || 8443
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(
  morgan(
    ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'
  )
)
server.use(cors({origin: '35.240.156.20'}))

server.use('/api', router)
// server.use('/', express.static(path.join(__dirname, 'dist')))

// https
//   .createServer(
//     {
//       key: fs.readFileSync('privkey.pem'),
//       cert: fs.readFileSync('fullchain.pem'),
//     },
//     server
//   )
//   .listen(HTTPS_PORT, async () => {
//     try {
//       await prisma.$connect()
//       console.log(`Database is connected to the server`)
//     } catch (error) {
//       console.log(`Server can't connect to database.`)
//     }
//     console.log(`server run at PORT:${HTTPS_PORT}`)
//   })

server.listen(HTTP_PORT, async () => {
  try {
    await prisma.$connect()
    console.log(`Database is connected to the server`)
  } catch (error) {
    console.log(`Server can't connect to database.`)
  }
  console.log(`server run at PORT:${HTTP_PORT}`)
})
