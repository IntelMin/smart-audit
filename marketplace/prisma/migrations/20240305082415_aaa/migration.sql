/*
  Warnings:

  - You are about to drop the `contract` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "contract";

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);
