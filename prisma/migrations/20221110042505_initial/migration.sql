-- CreateTable
CREATE TABLE "Company" (
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "Department" (
    "departmentId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("departmentId")
);

-- CreateTable
CREATE TABLE "Employees" (
    "employeeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("employeeId")
);

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("departmentId") ON DELETE RESTRICT ON UPDATE CASCADE;
