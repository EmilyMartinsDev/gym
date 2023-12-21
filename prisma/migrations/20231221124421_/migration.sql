-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `stripe_custumer_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usersinfos` (
    `id` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NULL,
    `height` DOUBLE NULL,
    `body_fat_percentage` DOUBLE NULL,
    `goal` ENUM('GAIN_MASS', 'LOSE_FAT', 'MAINTENANCE') NULL,
    `gender` ENUM('F', 'M') NULL,
    `age` INTEGER NULL,
    `activity_level` DOUBLE NULL,
    `level` ENUM('BEGINNER', 'INTERMEDIATED', 'ADVANCED', 'ATHLETE') NULL,
    `userId` VARCHAR(191) NOT NULL,
    `isFinished` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `usersinfos_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscriptions` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `priceId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `subscriptions_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workoutsuser` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `workouId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workouts` (
    `name` VARCHAR(191) NULL,
    `id` VARCHAR(191) NOT NULL,
    `workout_level` ENUM('BEGINNER', 'INTERMEDIATED', 'ADVANCED', 'ATHLETE') NOT NULL,
    `frequency` ENUM('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX') NOT NULL,
    `fase` ENUM('BASE', 'CHOQUE', 'DELOAD') NOT NULL,
    `muscle_target` ENUM('PEITO', 'COSTAS', 'OMBROS', 'BICEPS', 'TRICEPS', 'POSTERIOR', 'GLUTEO', 'QUADRICEPS', 'ABDOMEN') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `muscles` (
    `id` VARCHAR(191) NOT NULL,
    `name` ENUM('PEITO', 'COSTAS', 'OMBROS', 'BICEPS', 'TRICEPS', 'POSTERIOR', 'GLUTEO', 'QUADRICEPS', 'ABDOMEN') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercicio_Muscle` (
    `id` VARCHAR(191) NOT NULL,
    `muscleGroupId` VARCHAR(191) NOT NULL,
    `exercicioId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exercicses` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `rest` INTEGER NOT NULL,
    `obs` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sets` (
    `id` VARCHAR(191) NOT NULL,
    `exercicioId` VARCHAR(191) NOT NULL,
    `reps` VARCHAR(191) NOT NULL,
    `carga` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usersinfos` ADD CONSTRAINT `usersinfos_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscriptions` ADD CONSTRAINT `subscriptions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workoutsuser` ADD CONSTRAINT `workoutsuser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workoutsuser` ADD CONSTRAINT `workoutsuser_workouId_fkey` FOREIGN KEY (`workouId`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercicio_Muscle` ADD CONSTRAINT `Exercicio_Muscle_muscleGroupId_fkey` FOREIGN KEY (`muscleGroupId`) REFERENCES `muscles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercicio_Muscle` ADD CONSTRAINT `Exercicio_Muscle_exercicioId_fkey` FOREIGN KEY (`exercicioId`) REFERENCES `exercicses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sets` ADD CONSTRAINT `sets_exercicioId_fkey` FOREIGN KEY (`exercicioId`) REFERENCES `exercicses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
