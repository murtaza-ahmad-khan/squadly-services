if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const config = require("config");

// app config
app.use(express.json());

// DB
require("./utils/db")();

// Mount Routers
app.use("/api/squads/", require("./routes/squads"));

const PORT = config.get("PORT") || 5001;
app.listen(PORT, () => {
  console.log(`[${config.get("appName")}] Listening on PORT ${PORT}`);
});
