/*
  @Desc     Create a Squad
  @Path     POST /api/squads
  @Access   Private
*/
exports.createSquad = (req, res, next) => {
  res.send("Squad Created");
};

/*
  @Desc     Fetch all squads
  @Path     GET /api/squads
  @Access   Private
*/
exports.getSquads = (req, res, next) => {
  res.send([]);
};
