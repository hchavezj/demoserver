import db from '../utils/db'

const getCompany = await prisma.company.findUnique({
  where: {
    companyID: id,
  },
  include: {
    departments: true,
  },
})

export const getCompanies = async () => db.company.findMany()

export default function getCompany()

//export const getCompany = async (id) =>
//  db.company.findUnique({
//    where: {
//      companyId: id,
//    },
//    include: {
//      departments: true,
//    },
//  })

export const addCompany = async (name) => db.company.create({ data: { name } })
