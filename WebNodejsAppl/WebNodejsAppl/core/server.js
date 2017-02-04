var express = require("express");
var path = require("path");
var http = require("http");
var fs = require("fs");

var settings = require("../settings");
var employee = require("../controllers/employee");
var home = require("../controllers/home");

var app = express();
app.set('port', settings.webPort || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", home.load);
app.get("/getEmployees", employee.getList);

exports.createServer = function () {    
    http.createServer(app).listen(settings.webPort, function () {
        console.log("Started listening at: " + settings.webPort);
    });
}

//function (request, response) {
//    switch (request.method) {
//        case "GET":
//            if (request.url === "/") {
//                home.load(request, response);
//            }
//            else if (request.url === "/getEmployees") {
//                employee.getList(request, response);
//            }
//            break;
//        case "POST":
//            break;
//        case "PUT":
//            break;
//        case "DELETE":
//            break;
//        default:
//            break;
//    }
    
//}