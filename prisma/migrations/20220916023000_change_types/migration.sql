/*
  Warnings:

  - Changed the type of `weight_actual` on the `cylinders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `weight_full` on the `cylinders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `weight_shell` on the `cylinders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cylinders" DROP COLUMN "weight_actual",
ADD COLUMN     "weight_actual" DOUBLE PRECISION NOT NULL,
DROP COLUMN "weight_full",
ADD COLUMN     "weight_full" DOUBLE PRECISION NOT NULL,
DROP COLUMN "weight_shell",
ADD COLUMN     "weight_shell" DOUBLE PRECISION NOT NULL;
