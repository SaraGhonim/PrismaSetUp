/*
  Warnings:

  - You are about to drop the column `puplished` on the `note` table. All the data in the column will be lost.
  - Added the required column `published` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `note` DROP COLUMN `puplished`,
    ADD COLUMN `published` BOOLEAN NOT NULL;
