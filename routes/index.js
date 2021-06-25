const express = require("express");
const router = express.Router();

const authentication = require("../app/middlewares/userAuthentication");
const matchController = require("../app/http/matchController");

router.get("/", matchController().index, (req, res) => {
  res.render("index");
});

router.get("/admin", authentication.checkAuthenticated, (req, res) => {
  res.render("admin");
});
router.get("/allMatches", matchController().match, (req, res) => {
  res.render("allMatches");
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/match", (req, res) => {
  res.render("match");
});

module.exports = router;
