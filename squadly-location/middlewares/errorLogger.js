const fs = require("fs");
const path = require("path");

module.exports = function (err, req, res, next) {
  const error = JSON.stringify({
    date: new Date(),
    errorStack: err.stack,
  });

  if (process.env.NODE_ENV === "development") {
    console.log(error);
  }

  if (process.env.NODE_ENV === "production") {
    const logPath = path.join(__dirname, "..", "logs", "error.log");

    fs.appendFile(logPath, error + "\n", function (err) {});
  }

  res
    .status(500)
    .json({ success: false, data: "Unexpected Error! Try again later" });
};
