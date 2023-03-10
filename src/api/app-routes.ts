import express from "express";
const cors = require("cors");

import CustomerRoutes from "./customer-routes";
import ProductRoutes from "./product-routes";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use("/customer", CustomerRoutes);
app.use("/product", ProductRoutes);

export default app;
