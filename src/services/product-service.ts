import { Prisma } from "@prisma/client";
import { ProductRepository } from "@/database";

export class ProductService {
  repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async createProduct(product: Prisma.ProductCreateInput) {
    try {
      const productResult = await this.repository.createProduct(product);
      return productResult;
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts() {
    try {
      return this.repository.getProducts();
    } catch (error) {
      console.log(error);
    }
  }
}
