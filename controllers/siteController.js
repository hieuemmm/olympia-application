class SiteController {
  // [GET] /site/Home
  home(req, res) {
    res.render("site/home", { title: "HOME", user: req.user });
  }
}
module.exports = new SiteController();
