import { Router } from 'express'

import { getCompanies } from '../../modules/companies'

const router = Router()

router.get('/', async (req, res) => {
  const companies = await getCompanies()
  res.send(companies)
})

export default router
