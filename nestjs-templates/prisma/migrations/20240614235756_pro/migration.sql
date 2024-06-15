/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `IdentityProvider` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "DigitalIdentityRequest" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "birthPlace" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "parentNames" TEXT NOT NULL,
    "parentCNI" TEXT NOT NULL,
    "residenceProof" TEXT NOT NULL,
    "identityDocument" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'pending',
    "uniqueId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "DigitalIdentityRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DigitalIdentityRequest_user_id_key" ON "DigitalIdentityRequest"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "IdentityProvider_user_id_key" ON "IdentityProvider"("user_id");

-- AddForeignKey
ALTER TABLE "DigitalIdentityRequest" ADD CONSTRAINT "DigitalIdentityRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
