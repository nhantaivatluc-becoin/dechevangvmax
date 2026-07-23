/*
  Warnings:

  - You are about to drop the column `farmTime` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `invite` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `WheelSpin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "farmTime",
DROP COLUMN "invite",
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "WheelSpin";
