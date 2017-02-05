
/*
 * GET users listing.
 */
var settings = require("../settings");

exports.list = function (req, res) {
    res.send("respond with a resource");
};

exports.postUser = function (request, response) {
    var username = request.body.username;
    response.cookie(settings.cookieName, "Name=" + username, { expire: new Date() + 80000 });
    response.redirect("/");
    response.end();
}

exports.getUser = function (request, response) {
    var cookies = request.headers.cookie.split(";");
    cookies = cookies.filter(function (x) { return x.indexOf(settings.cookieName) != -1 });
    var cookie = cookies.length > 0 ? cookies[0].split("%3D")[1] : null;

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ cookieName: cookie }));
    response.end();
}

exports.clearCookie = function (request, response) {
    //clearCookie(settings.cookieName);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ status: "success" }));
    response.end();
}