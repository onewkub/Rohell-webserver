import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import prisma from './lib/prisma'
const PORT = process.env.PORT || 3001
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(
  morgan(
    ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'
  )
)
server.use(cors())

server.use('/api', router)

server.use('/', (req, res) => {
  res.send('Ragnarok Hell -- Server')
})

server.listen(PORT, async () => {
  try {
    await prisma.$connect()
    console.log(`Database is connected to the server`)
  } catch (error) {
    console.log(`Server can't connect to database.`)
  }
  console.log(`server run at PORT:${PORT}`)
})
