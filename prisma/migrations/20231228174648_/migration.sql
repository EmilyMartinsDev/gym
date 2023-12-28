/*
  Warnings:

  - You are about to drop the column `obs` on the `exercicses` table. All the data in the column will be lost.
  - You are about to drop the column `rest` on the `exercicses` table. All the data in the column will be lost.
  - Added the required column `obs` to the `sessions_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rest` to the `sessions_exercises` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sets` DROP FOREIGN KEY `sets_exercicioId_fkey`;

-- AlterTable
ALTER TABLE `exercicses` DROP COLUMN `obs`,
    DROP COLUMN `rest`;

-- AlterTable
ALTER TABLE `sessions_exercises` ADD COLUMN `obs` VARCHAR(191) NOT NULL,
    ADD COLUMN `rest` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `sets` ADD CONSTRAINT `sets_exercicioId_fkey` FOREIGN KEY (`exercicioId`) REFERENCES `sessions_exercises`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
