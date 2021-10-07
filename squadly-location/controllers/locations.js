const axios = require("axios");

const Location = require("../models/Location");
/*
  @Desc     Create a Location
  @Path     POST /api/locations
  @Access   Private
*/
exports.createLocation = async (req, res, next) => {
  const { name, contact } = req.body;
  const location = new Location(name, contact);
  await location.save();
  res.status(201).json({ success: true, data: "Location Created" });
};

/*
  @Desc     Fetch all Locations
  @Path     GET /api/locations
  @Access   Private
*/
exports.getLocations = async (req, res, next) => {
  const [rows, fields] = await Location.find();
  res.json({ success: true, data: rows });
};

/*
  @Desc     Fetch single Location
  @Path     GET /api/locations/:id
  @Access   Private
*/
exports.getLocation = async (req, res, next) => {
  const [rows] = await Location.findById(req.params.id);

  if (!rows.length) {
    return res.status(404).json({ success: false, data: "Location not found" });
  }

  // Fetch squads by location Id
  const { data } = await axios.get(
    "http://localhost:5001/api/squadss?locationId=" + req.params.id
  );

  const location = { ...rows[0], squads: data.data };
  res.json({ success: true, data: location });
};
