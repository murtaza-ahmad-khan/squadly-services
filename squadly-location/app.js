if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("express-async-errors");

const express = require("express");
const app = express();
const config = require("config");

// app config
app.use(express.json());

// Mount Routers
app.use("/api/locations", require("./routes/locations"));

// Error Middlware
app.use(require("./middlewares/errorLogger"));

const PORT = config.get("PORT") || 5000;
app.listen(PORT, () => {
  console.log(`[${config.get("appName")}] Listening on PORT ${PORT}`);
});
