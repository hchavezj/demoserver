import { Router } from 'express'

import { getCompanies, getCompany, addCompany } from '../../modules/companies'

const router = Router()

router.get('/', async (req, res) => {
  const companies = await getCompanies()
  res.send(companies)
})

router.get('/:id', async (req, res) => {
  const company = await getCompany(req.params.id)
  if (company) {
    res.send(company)
  } else {
    res.status(404).send({ msg: 'Company not found' })
  }
})

export default router
