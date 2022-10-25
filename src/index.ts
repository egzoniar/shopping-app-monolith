import express from "express";

import config from "./config";

const app = express();

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});