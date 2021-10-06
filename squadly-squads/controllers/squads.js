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
  const squads = await Squad.find();
  res.json({ success: true, data: squads });
};
