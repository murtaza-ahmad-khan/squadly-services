const mongoose = require("mongoose");
const config = require("config");

module.exports = async function () {
  const db = config.get("db.URI");
  try {
    await mongoose.connect(db);
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    console.log("DB connection failed");
  }
};
