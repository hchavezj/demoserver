import { Router } from 'express'

import { getCompanies, getCompany, addCompany } from '../../modules/companies'
import { getDepartments, getDepartment, addDepartment } from '../../modules/deparments'

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

router.post('/', async (req, res) => {
  const companyName = req.body.name
  if (companyName) {
    const company = await addCompany(req.body.name)
    res.send(company)
  } else {
    res.status(400).send({ msg: 'Company name is required' })
  }
})

router.post('/:id', async (req, res) => {
  const companyId = req.params.id
  const company = await getCompanies(companyId)

  if (company) {
    const departmentName = req.body.name

    if (departmentName) {
      const department = await addDepartment(departmentName)
      res.send(company)
    } else {
      res.status(400).send({ msg: 'Company name is required' })
    }
  } else {
    res.status(400).send({ msg: 'Company does not exist' })
  }

})

export default router
