import { Router } from 'express'

import logger from '../helpers/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.info('Inside the root path')
  const title = process.env.TITLE || 'Server'
  const introname = process.env.INTRONAME || 'Hello'
  res.send({ msg: title, introname })
})

export default router
