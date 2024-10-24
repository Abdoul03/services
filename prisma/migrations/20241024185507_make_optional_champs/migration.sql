-- AlterTable
ALTER TABLE `caisse` MODIFY `stock_final` INTEGER NULL,
    MODIFY `montant_total` INTEGER NULL,
    MODIFY `solde` INTEGER NULL;

-- AlterTable
ALTER TABLE `creditEntreprise` MODIFY `montant_paye` INTEGER NULL,
    MODIFY `montant_restant` INTEGER NULL,
    MODIFY `solde` INTEGER NULL;

-- AlterTable
ALTER TABLE `prepayee` MODIFY `montant_depense` INTEGER NULL,
    MODIFY `montant_restant` INTEGER NULL;

-- AlterTable
ALTER TABLE `serviceEntreprise` MODIFY `montant_final` INTEGER NULL,
    MODIFY `total` INTEGER NULL;

-- AlterTable
ALTER TABLE `transInternation` MODIFY `date_fin` DATETIME(3) NULL,
    MODIFY `soldes` INTEGER NULL,
    MODIFY `Decouvert` INTEGER NULL,
    MODIFY `crediut` INTEGER NULL,
    MODIFY `debit_caisse` INTEGER NULL,
    MODIFY `debit_BNDA` INTEGER NULL;
