var express = require("express");
var path = require("path");
var app = express();

app.use(require('stylus').middleware(path.join(__dirname, "../", 'public')));
app.use(express.static(path.join(__dirname, "../", 'public')));

var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

http.listen("3000", function () {
    console.log("We are connected");
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../", '/views/index.html'));
});

io.on("connection", function (socket) {
    console.log("We have a connection");
    socket.on("new-message", function (msg) {
        io.emit("receive-message", msg);
    });
});
