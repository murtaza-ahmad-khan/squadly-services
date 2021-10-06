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
