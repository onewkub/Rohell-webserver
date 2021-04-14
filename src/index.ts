import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
const PORT = 3001
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(
  morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms')
)
server.use(cors())

server.use('/api', router)

server.use('/', (req, res) => {
  res.send('Ragnarok Hell -- Server')
})

server.listen(PORT, () => {
  console.log(`Server run at PORT:${PORT}`)
})
