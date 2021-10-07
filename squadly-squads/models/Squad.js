const mongoose = require("mongoose");

const squadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
  },
  locationId: { type: String, required: true },
});

module.exports = mongoose.model("Squad", squadSchema);
