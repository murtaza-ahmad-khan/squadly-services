/*
  @Desc     Create a Location
  @Path     POST /api/locations
  @Access   Private
*/
exports.createLocation = (req, res, next) => {
  res.send("Location Created");
};

/*
  @Desc     Fetch all Locations
  @Path     GET /api/locations
  @Access   Private
*/
exports.getLocations = (req, res, next) => {
  res.send([]);
};
