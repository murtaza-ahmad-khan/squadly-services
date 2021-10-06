require("dotenv").config();

const express = require("express");
const app = express();

// Mount Routers
app.use("/api/squads", require("./routes/squads"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`[Squadly Squads] Listening on PORT ${PORT}`);
});
