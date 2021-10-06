const express = require("express");
const router = express.Router();

const { createLocation, getLocations } = require("../controllers/locations");

router.route("/").get(getLocations).post(createLocation);

module.exports = router;
