/*
  Warnings:

  - Made the column `muscle_group_target` on table `userinfo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `userinfo` MODIFY `muscle_group_target` JSON NOT NULL;
