/*
  Warnings:

  - You are about to drop the `BuyContract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SellContract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BuyContract";

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "SellContract";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "contract" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listedcontracts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code_hash" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "listedcontracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ownedcontracts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "ownedcontracts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_address_key" ON "users"("address");

-- CreateIndex
CREATE UNIQUE INDEX "listedcontracts_id_key" ON "listedcontracts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ownedcontracts_id_key" ON "ownedcontracts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ownedcontracts_user_id_contract_id_key" ON "ownedcontracts"("user_id", "contract_id");

-- AddForeignKey
ALTER TABLE "listedcontracts" ADD CONSTRAINT "listedcontracts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownedcontracts" ADD CONSTRAINT "ownedcontracts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
