-- CreateTable
CREATE TABLE `clientCanal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `telephone` INTEGER NOT NULL,
    `numAbonne` INTEGER NOT NULL,
    `finAbonn` DATETIME(3) NOT NULL,

    UNIQUE INDEX `clientCanal_telephone_key`(`telephone`),
    UNIQUE INDEX `clientCanal_numAbonne_key`(`numAbonne`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commissionDuMois` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `mom_service` ENUM('CANAL_PLUS', 'MALIVISION', 'WAVE', 'ORANGE_MONEY', 'MOBICASH', 'SAMA_MONEY', 'CREDIT_ORANGE', 'CREDIT_MALITEL', 'CREDIT_TELECEL', 'W_MG_RIA') NOT NULL DEFAULT 'ORANGE_MONEY',
    `debit` INTEGER NOT NULL,
    `montant` INTEGER NOT NULL,
    `sold` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `creditEntreprise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `nomClient` VARCHAR(191) NOT NULL,
    `prenomClient` VARCHAR(191) NOT NULL,
    `motif` VARCHAR(191) NOT NULL,
    `montant` INTEGER NOT NULL,
    `montant_paye` INTEGER NOT NULL,
    `montant_restant` INTEGER NOT NULL,
    `solde` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prepayee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `nom_client` VARCHAR(191) NOT NULL,
    `montant_initial` INTEGER NOT NULL,
    `montant_depense` INTEGER NOT NULL,
    `montant_restant` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `serviceEntreprise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `mom_service` ENUM('CANAL_PLUS', 'MALIVISION', 'WAVE', 'ORANGE_MONEY', 'MOBICASH', 'SAMA_MONEY', 'CREDIT_ORANGE', 'CREDIT_MALITEL', 'CREDIT_TELECEL', 'W_MG_RIA') NOT NULL DEFAULT 'ORANGE_MONEY',
    `solde_a_nouveau` INTEGER NOT NULL,
    `montant_final` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transInternation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montant_initial` INTEGER NOT NULL,
    `nom_service` ENUM('WESTERUNION', 'MONEYGRAM', 'RIA') NOT NULL DEFAULT 'WESTERUNION',
    `montant_trans` INTEGER NOT NULL,
    `montant_recus` INTEGER NOT NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,
    `soldes` INTEGER NOT NULL,
    `Decouvert` INTEGER NOT NULL,
    `crediut` INTEGER NOT NULL,
    `debit_caisse` INTEGER NOT NULL,
    `debit_BNDA` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uvAbonnement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `produit` ENUM('CANALPlus', 'MALIVISION') NOT NULL DEFAULT 'CANALPlus',
    `montant` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caisse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `service` ENUM('CANAL_PLUS', 'MALIVISION', 'WAVE', 'ORANGE_MONEY', 'MOBICASH', 'SAMA_MONEY', 'CREDIT_ORANGE', 'CREDIT_MALITEL', 'CREDIT_TELECEL', 'W_MG_RIA') NOT NULL,
    `stock_initial` INTEGER NOT NULL,
    `stock_final` INTEGER NOT NULL,
    `montant_total` INTEGER NOT NULL,
    `solde` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
