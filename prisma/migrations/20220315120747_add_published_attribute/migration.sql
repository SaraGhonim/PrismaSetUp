/*
  Warnings:

  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `puplished` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- AlterTable
ALTER TABLE `note` ADD COLUMN `puplished` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `profile`;
