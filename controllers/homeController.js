const path = require("path");

module.exports.home = function (req, res) {
  res.render("index");
};
module.exports.footer = function (req, res) {
  res.render("footer");
};
module.exports.HieuVV5 = function (req, res) {
  res.render("HieuVV5");
};
module.exports.addSingleQuestion = function (req, res) {
  res.render("addSingleQuestion");
};
