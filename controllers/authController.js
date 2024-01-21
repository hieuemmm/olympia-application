const passport = require("passport");
require("../services/googleAuthService");
class AuthController {
  // [GET] /auth/logout
  logout = (req, res) => {
    const callbackUrl = req.query.callbackUrl;
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect(callbackUrl);
    });
  };
  // [GET] /auth/google
  googleFailure = (req, res) => {
    res.send("Failed to authenticate..");
  };
  // [GET] /auth/google/callback
  checkLogin = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
  };

  googleAuth = passport.authenticate("google", {
    scope: ["email", "profile"],
  });
  googleCallback = passport.authenticate("google", {
    successRedirect: "/home",
    failureRedirect: "/auth/google/failure",
  });
}
module.exports = new AuthController();
