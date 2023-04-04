-- CreateEnum
CREATE TYPE "Status" AS ENUM ('YET', 'PROCCESSING', 'DONE');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "dueDate" CHAR(10) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'YET',
    "description" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
