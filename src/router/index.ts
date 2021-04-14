import { Router } from 'express'
import registerController from '../controller/register'

const router = Router()

router.get('/test-con', (req, res) => {
  res.status(200).json('OKAY')
})

router.post('/register', registerController)

export default router
