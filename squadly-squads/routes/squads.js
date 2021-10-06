const express = require("express");
const router = express.Router();

const { createSquad, getSquads } = require("../controllers/squads");

router.route("/").get(getSquads).post(createSquad);

module.exports = router;
