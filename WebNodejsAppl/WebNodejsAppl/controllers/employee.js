var fs = require("fs");
var db = require("../core/db");

// Get
exports.getList = function (request, response) {
    db.executeSql("SELECT * FROM [Test].[dbo].[TableA]", function (data, err) {
        if (err) {
            //var data = fs.readFileSync("../views/error500.html");
            //response.writeHead(500, "Internal Error Occured", { "Content-Type": "text/html" });
            //response.write(data.toString());
                        
            response.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            response.write(JSON.stringify({ error: "ERROR occured: " + err }));
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(data));
        }

        response.end();     
    });
};

exports.get = function (request, response, employeeId) {

};

// Post
exports.add = function (request, response, reqBody) {

};

exports.update = function (request, response, reqBody) {

};

exports.delete = function (request, response, reqBody) {

};