const Match = require("../../models/match");
function matchController() {
  return {
    async match(req, res) {
      const matches = await Match.find();
      return res.render("allMatches", { matches: matches });
    },
    async index(req, res) {
      const matches = await Match.find();
      return res.render("index", { matches: matches });
    },
  };
}

module.exports = matchController;
