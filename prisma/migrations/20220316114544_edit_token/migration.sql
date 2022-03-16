/*
  Warnings:

  - You are about to drop the column `expiration` on the `token` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `token` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `token` DROP COLUMN `expiration`,
    DROP COLUMN `updatedAt`;
