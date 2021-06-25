const mongoose = require("mongoose");

const matchScheme = mongoose.Schema({
  team1: {
    type: String,
    required: true,
  },
  team2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const MatchModel = new mongoose.model("Match", matchScheme);

module.exports = MatchModel;
