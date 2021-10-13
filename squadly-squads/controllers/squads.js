const Squad = require("../models/Squad");
/*
  @Desc     Create a Squad
  @Path     POST /api/squads
  @Access   Private
*/
exports.createSquad = async (req, res, next) => {
  await Squad.create(req.body);
  res.status(201).json({ success: true, data: "Squad created successfully." });
};

/*
  @Desc     Fetch all squads
  @Path     GET /api/squads
  @Access   Private
*/
exports.getSquads = async (req, res, next) => {
  //NOTE: In a future we can create generic mongodb query
  let query = req.query;
  if (query?.locationId) {
    query = {
      locationId: {
        $eq: query.locationId,
      },
    };
  }
  const squads = await Squad.find(query);
  res.json({ success: true, data: squads });
};
