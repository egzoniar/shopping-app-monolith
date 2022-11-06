import { Prisma, PrismaClient } from "@prisma/client";
const { customer, address } = new PrismaClient();

class CustomerRepository {
  async CreateCustomer({
    email,
    password,
    phone,
    salt,
    address: addressData,
  }: Prisma.CustomerCreateInput) {
    try {
      const customerResult = await customer.create({
        data: {
          email,
          password,
          phone,
          salt,
          address: {
            create: addressData,
          },
        },
      });
      return customerResult;
    } catch (error) {
      console.log(error);
    }
  }

  async CreateCustomerWithExistingAddress(
    customerData: Prisma.CustomerCreateWithoutAddressInput,
    addressId: number
  ) {
    try {
      const customerResult = await customer.create({
        data: {
          ...customerData,
          address: {
            connect: {
              id: addressId,
            },
          },
        },
      });
      return customerResult;
    } catch (error) {
      console.log(error);
    }
  }

  async CreateAddress() {}

  async FindCustomer() {}

  async FindCustomerById() {}

  async Wishlist() {}

  async AddWishlistItem() {}

  async AddCartItem() {}

  async AddOrderToProfile() {}
}

export default CustomerRepository;
