-- DropForeignKey
ALTER TABLE "DigitalIdentityRequest" DROP CONSTRAINT "DigitalIdentityRequest_user_id_fkey";

-- AlterTable
ALTER TABLE "DigitalIdentityRequest" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "DigitalIdentityRequest" ADD CONSTRAINT "DigitalIdentityRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
