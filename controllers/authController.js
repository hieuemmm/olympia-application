require('../services/googleAuthService')
const passport = require('passport');

module.exports.login = (req, res) => {
    res.render('login');
}
module.exports.logout = (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
}
module.exports.googleAuth = passport.authenticate(
    'google', { scope: ['email', 'profile'] }
)
module.exports.googleCallback = passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/auth/google/failure'
})
module.exports.googleFailure = (req, res) => {
    res.send('Failed to authenticate..');
}
module.exports.CheckLogin = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
}