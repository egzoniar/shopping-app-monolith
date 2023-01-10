import { Router } from "express";
import { CustomerService } from "@/services";

const router = Router();

const customerService = new CustomerService();

router.get("/", async (req, res) => {
  const customers = await customerService.findCustomers();
  res.json(customers);
});

router.get("/:id", async (req, res) => {
  const customer = await customerService.findCustomerById(
    Number(req.params.id)
  );
  res.json(customer);
});

router.get("/:email", async (req, res) => {
  const customer = await customerService.findCustomerByEmail(req.params.email);
  res.json(customer);
});

router.get("/wishlist/:customerId", async (req, res) => {
  const wishlist = await customerService.getWishlist(
    Number(req.params.customerId)
  );
  res.json(wishlist);
});

router.post("/", async (req, res) => {
  const customer = await customerService.createCustomer(req.body);
  res.json(customer);
});

router.post("/createAddress/:customerId", async (req, res) => {
  const customer = await customerService.createAddress(
    req.body,
    Number(req.params.customerId)
  );
});

router.post(
  "/createCustomerWithExistingAddress/:addressId",
  async (req, res) => {
    const customer = await customerService.createCustomerWithExistingAddress(
      req.body,
      Number(req.params.addressId)
    );
    res.json(customer);
  }
);

router.post("/addWishlistItem/:customerId", async (req, res) => {
  const wishlist = await customerService.addWishlistItem(
    Number(req.params.customerId),
    req.body.product
  );
  res.json(wishlist);
});

export default router;
