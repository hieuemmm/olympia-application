class DraftController {
  // [GET] /draft/HauNT
  HauNT(req, res) {
    res.render("draft/HauNT", { title: "HauNT" });
  }
  // [GET] /draft/HieuVV
  HieuVV = function (req, res) {
    res.render("draft/HieuVV", { title: "HieuVV" });
  };
}
module.exports = new DraftController();
