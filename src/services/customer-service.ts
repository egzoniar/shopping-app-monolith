import { Prisma } from "@prisma/client";
import { CustomerRepository } from "@/database";

class CustomerService {
  repository: CustomerRepository;

  constructor() {
    this.repository = new CustomerRepository();
  }

  async createCustomer({
    email,
    password,
    phone,
    salt,
    address: addressData,
  }: Prisma.CustomerCreateInput) {
    try {
      const customerResult = await this.repository.createCustomer({
        email,
        password,
        phone,
        salt,
        address: {
          create: addressData.create,
        },
      });
      return customerResult;
    } catch (error) {
      console.log(error);
    }
  }

  async createCustomerWithExistingAddress(
    customerWithoutAddress: Prisma.CustomerCreateWithoutAddressInput,
    addressId: number
  ) {
    try {
      const createdCustomer =
        await this.repository.createCustomerWithExistingAddress(
          customerWithoutAddress,
          addressId
        );
      return createdCustomer;
    } catch (error) {
      console.log(error);
    }
  }

  async createAddress(address: Prisma.AddressCreateInput, customerId: number) {
    try {
      const createdAddress = await this.repository.createAddress(
        customerId,
        address
      );
      return createdAddress;
    } catch (error) {
      console.log(error);
    }
  }

  async findCustomerByEmail(email: string) {
    try {
      const customer = this.repository.findCustomerByEmail(email);
      return customer;
    } catch (error) {
      console.log(error);
    }
  }

  async findCustomerById(id: number) {
    try {
      const customer = this.repository.findCustomerById(id);
      return customer;
    } catch (error) {
      console.log(error);
    }
  }

  async getWishlist(customerId: number) {
    try {
      const wishlist = this.repository.getWishlist(customerId);
      return wishlist;
    } catch (error) {
      console.log(error);
    }
  }

  async addWishlistItem(
    customerId: number,
    product: Prisma.ProductCreateInput
  ) {
    try {
      const wishlist = this.repository.addWishlistItem(customerId, product);
      return wishlist;
    } catch (error) {
      console.log(error);
    }
  }
}
