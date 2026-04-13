/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the `TodoCategory` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `userId` on table `Todo` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userId_fkey";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "categoryId",
ALTER COLUMN "userId" SET NOT NULL;

-- DropTable
DROP TABLE "TodoCategory";

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
