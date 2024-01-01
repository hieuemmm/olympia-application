const path = require('path');

module.exports.home = function (req, res) {
    res.render('index');
}
module.exports.footer = function (req, res) {
    res.render('footer');
}