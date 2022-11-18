import axios from "axios";
import { faker } from '@faker-js/faker'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  auth: {
    username: 'admin',
    password: 'admin',
  },
})

const { data: departments } = await api.get('/api/departments')

const departmentIds = []

departments.map((department) => departmentIds.push(department.departmentId))

for (let i = 0; i < 100; i++) {
  console.log(`Instering random #${i}`)
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const fullName = `${firstName} ${lastName}`
  const email = faker.internet.email(firstName, lastName)
  const title = faker.name.jobTitle()
  const departmentId = departmentIds[Math.floor(Math.random() * departmentIds.length)]
  const quote = faker.lorem.paragraph()

  await api.post('/api/employees', {
    name: fullName,
    email,
    title,
    departmentId,
    quote,
  })
}

console.log("Done")
