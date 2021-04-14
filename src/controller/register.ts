import { Request, Response } from 'express'
import prisma from '../lib/prisma'

async function registerController(req: Request, res: Response) {
  try {
    const inputBody = req.body
    const userData = {
      userid: inputBody.id,
      user_pass: inputBody.password,
      sex: inputBody.gender,
      email: inputBody.email,
      birthdate: new Date(inputBody.birthDate),
    }
    const createData = await prisma.login.create({
      data: userData,
    })

    res.status(200).json({ status: 'complete', ...createData })
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(409).send({error: 'Your userid has been already used.'})
    } else {
      res.status(500).send({error: 'Something went wrong'})
    }
    // throw error  
  } finally {
    prisma.$disconnect()
  }
}

export default registerController
