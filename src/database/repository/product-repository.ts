import { Prisma, PrismaClient } from "@prisma/client";
const { product: ProductModel } = new PrismaClient();

export class ProductRepository {
  async createProduct(product: Prisma.ProductCreateInput) {
    try {
      const productResult = await ProductModel.create({ data: product });
      return productResult;
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts() {
    try {
      return await ProductModel.findMany();
    } catch (error) {
      console.log(error);
    }
  }
}
