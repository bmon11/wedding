/*
  Warnings:

  - Made the column `type` on table `blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `blog` MODIFY `type` INTEGER NOT NULL DEFAULT 0;
