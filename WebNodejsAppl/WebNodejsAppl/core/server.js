var http = require("http");
var settings = require("../settings");
var employee = require("../controllers/employee");
var querystring = require("querystring");

http.createServer(function (request, response) {
    switch (request.method) {
        case "GET":
            if (request.url === "/") {
                response.end();
            }
            else if (request.url === "/employees") {
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
