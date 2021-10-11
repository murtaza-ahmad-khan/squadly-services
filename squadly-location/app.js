require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// app config
app.use(express.json());

// Mount Routers
app.use("/api/locations", require("./routes/locations"));

// Error Middlware
app.use(require("./middlewares/errorLogger"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Squadly Locations] Listening on PORT ${PORT}`);
});
