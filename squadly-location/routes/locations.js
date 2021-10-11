const express = require("express");
const router = express.Router();

const {
  createLocation,
  getLocations,
  getLocation,
} = require("../controllers/locations");

router.route("/").get(getLocations).post(createLocation);

router.route("/:id").get(getLocation);

module.exports = router;
