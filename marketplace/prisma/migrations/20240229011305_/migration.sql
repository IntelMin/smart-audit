-- CreateTable
CREATE TABLE "audit_requests" (
    "request_id" SERIAL NOT NULL,
    "contract" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "status_log" TEXT,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_requests_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "bounties" (
    "id" SERIAL NOT NULL,
    "bounty_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "max_reward" INTEGER,
    "vault_tvl" INTEGER,
    "logo" TEXT,
    "date" TIMESTAMP(3),
    "last_updated_date" TIMESTAMP(3),
    "response_time_metric_enabled" BOOLEAN NOT NULL,
    "med_response_time" INTEGER,
    "total_paid_metric_enabled" BOOLEAN NOT NULL,
    "total_paid_amount" INTEGER,
    "rating" DOUBLE PRECISION,
    "firm" JSONB NOT NULL,
    "category_list" TEXT[],
    "language_list" TEXT[],
    "source_code_list" TEXT[],
    "reference_list" TEXT[],

    CONSTRAINT "bounties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "wallet" TEXT NOT NULL,
    "contract" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellContract" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "SellContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuyContract" (
    "id" SERIAL NOT NULL,
    "contractInfo" TEXT NOT NULL,

    CONSTRAINT "BuyContract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "audit_requests_contract_key" ON "audit_requests"("contract");
