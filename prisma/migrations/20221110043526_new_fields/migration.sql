/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Employees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updateAt` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Employees" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");
