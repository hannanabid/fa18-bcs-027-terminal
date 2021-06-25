const express = require("express");

const router = express.Router();

const MatchModel = require("../../models/match");

/*Get All Matches */
router.get("/", async (req, res) => {
  let Matches = await MatchModel.find();
  return res.send(Matches);
});

/*  Get One Match */
router.get("/:id", async (req, res) => {
  let Match = await MatchModel.findById(req.params.id);
  return res.send(Match);
});

/* POST A NEW Match */
router.post("/", async (req, res) => {
  try {
    console.log("In try");

    let Match = new MatchModel();
    if (req.body.team1 === req.body.team2) {
      req.flash("error", "Team 1 and Team 2 Must Be Different");
      return res.redirect("/match");
    } else {
      Match.team1 = req.body.team1;
      Match.team2 = req.body.team2;
      Match.city = req.body.city;
      Match.date = req.body.date;

      await Match.save();
      return res.send(Match);
    }
  } catch (error) {
    res.send(error);
  }
});

/*Update A Match */
router.put("/:id", async (req, res) => {
  try {
    let Match = await MatchModel.findById(req.params.id);
    Match.team1 = req.body.team1;
    Match.team2 = req.body.team2;
    Match.city = req.body.city;
    Match.date = req.body.date;

    await Match.save();
    return res.send(Match);
  } catch (error) {
    res.send(error);
    console.log(error.message);
  }
});

/*Delete a Match */
router.delete("/:id", async (req, res) => {
  let Match = await Match.findByIdAndDelete(req.params.id);
  return res.send(Match);
});

module.exports = router;
