import { Prisma, PrismaClient } from "@prisma/client";
const {
  customer: CustomerModel,
  address: AddressModel,
  wishlist: WishlistModel,
} = new PrismaClient();

class CustomerRepository {
  async createCustomer({
    email,
    password,
    phone,
    salt,
    address: addressData,
  }: Prisma.CustomerCreateInput) {
    try {
      const customerResult = await CustomerModel.create({
        data: {
          email,
          password,
          phone,
          salt,
          address: {
            create: addressData.create,
          },
        },
      });
      return customerResult;
    } catch (error) {
      console.log(error);
    }
  }

  async createCustomerWithExistingAddress(
    customerData: Prisma.CustomerCreateWithoutAddressInput,
    addressId: number
  ) {
    try {
      const createdCustomer = await CustomerModel.create({
        data: {
          ...customerData,
          address: {
            connect: {
              id: addressId,
            },
          },
        },
      });
      return createdCustomer;
    } catch (error) {
      console.log(error);
    }
  }

  async createAddress(
    customerId: number,
    { street, postalCode, city, country, Customer }: Prisma.AddressCreateInput
  ) {
    try {
      const customer = await CustomerModel.findUnique({
        where: { id: customerId },
      });

      if (!customer) throw new Error("Could not find the Customer!");

      const createdAddress = await AddressModel.create({
        data: {
          street,
          postalCode,
          city,
          country,
          Customer: { connect: { id: customerId } },
        },
      });

      return createdAddress;
    } catch (error) {}
  }

  async findCustomer(email: string) {
    try {
      const foundedCustomer = await CustomerModel.findFirst({
        where: { email },
      });

      return foundedCustomer;
    } catch (error) {}
  }

  async findCustomerById(id: number) {
    try {
      const foundedCustomer = await CustomerModel.findUnique({
        where: { id },
        include: { address: true, Wishlist: true, Cart: true, orders: true },
      });
      return foundedCustomer;
    } catch (error) {}
  }

  async getWishlist(customerId: number) {
    try {
      const foundedWishlist = await WishlistModel.findUnique({
        where: { customerId },
        include: {
          products: true,
        },
      });
      return foundedWishlist;
    } catch (error) {
      console.log(error);
    }
  }

  async addWishlistItem() {}

  async addCartItem() {}

  async addOrderToProfile() {}
}

export default CustomerRepository;
