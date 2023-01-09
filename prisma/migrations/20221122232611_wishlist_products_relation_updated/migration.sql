/*
  Warnings:

  - You are about to drop the column `productId` on the `Wishlist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_productId_fkey";

-- DropIndex
DROP INDEX "Wishlist_productId_key";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "wishlistId" INTEGER;

-- AlterTable
ALTER TABLE "Wishlist" DROP COLUMN "productId";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
