import { Router } from 'express'

import getCompanies from '../../modules/companies'

const router = Router()

router.get('/', (req, res) => {

  const companies = null
  res.send(companies)
})

export default router
