var http = require("http");
var fs = require("fs");

var settings = require("../settings");
var employee = require("../controllers/employee");
var home = require("../controllers/home");

http.createServer(function (request, response) {    
    switch (request.method) {
        case "GET":
            if (request.url === "/") {
                home.load(request, response);
            }
            else if (request.url === "/getEmployees") {
                employee.getList(request, response);
            }
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;
    }
    
}).listen(settings.webPort, function () {
    console.log("Started listening at: " + settings.webPort);
});
