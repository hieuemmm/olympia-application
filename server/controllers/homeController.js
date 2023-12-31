module.exports.home = function (req, res) {
    return res.send("HELLO");
    // res.sendFile(path.join(__dirname, '/client/src/index.html'));
}