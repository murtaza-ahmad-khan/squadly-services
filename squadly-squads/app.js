require("dotenv").config();

const express = require("express");
const app = express();

// app config
app.use(express.json());

// DB
require("./utils/db")();

// Mount Routers
app.use("/api/squads/", require("./routes/squads"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`[Squadly Squads] Listening on PORT ${PORT}`);
});
