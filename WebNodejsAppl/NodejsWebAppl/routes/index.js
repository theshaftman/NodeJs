
/*
 * GET home page.
 */
var fs = require("fs");

exports.index = function (req, res) {
    //res.render('index', { title: 'Home' });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("./views/index.html").toString());
    res.end();
};