import { Router } from 'express'

import {
  addDepartment,
  getDepartment,
  getDepartments,
} from '../../models/departments'

const router = Router()

router.get('/', async (req, res) => {
  const departments = await getDepartments()
  res.send(departments)
})

router.get('/:id', async (req, res) => {
  const department = await getDepartment(req.params.id)
  if (department) {
    res.send(department)
  } else {
    res.status(404).send({ msg: 'Department not found' })
  }
})

router.post('/', async (req, res) => {
  const departmentName = req.body.name
  if (departmentName) {
    const department = await addDepartment(departmentName)
    res.send(department)
  } else {
    res.status(400).send({ msg: 'Department name is required' })
  }
})

// router.post('/:id', async (req, res) => {
//   const companyId = req.params.id
//   const company = await getCompany(companyId)
//   if (company) {
//     const departmentName = req.body.name
//     if (departmentName) {
//       const department = await addDepartment(departmentName, companyId)
//       res.send(department)
//     } else {
//       res.status(400).send({ msg: 'Department name is required' })
//     }
//   } else {
//     res.status(400).send({ msg: 'Company does not exist required' })
//   }
// })

export default router
