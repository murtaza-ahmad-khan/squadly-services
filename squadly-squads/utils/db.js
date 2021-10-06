const mongoose = require("mongoose");

module.exports = async function () {
  const db = process.env.db_uri;
  try {
    await mongoose.connect(db);
    console.log("Connected to DB");
  } catch (error) {
    console.log("DB connection failed");
  }
};
