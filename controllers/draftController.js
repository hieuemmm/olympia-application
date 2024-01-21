class DraftController {
  // [GET] /draft/HauNT
  HauNT(req, res) {
    res.render("draft/HauNT", { title: "HauNT", user: req.user });
  }
  // [GET] /draft/HieuVV
  HieuVV = function (req, res) {
    res.render("draft/HieuVV", { title: "HieuVV", user: req.user });
  };
}
module.exports = new DraftController();
