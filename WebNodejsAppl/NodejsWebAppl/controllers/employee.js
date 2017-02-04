var fs = require("fs");
var url = require("url");
var db = require("../core/db");
var settings = require("../settings");

// Get
exports.getList = function (request, response) {
    db.executeSql("SELECT * FROM " + settings.dbTable, function (data, err) {
        if (err) {
            response.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            response.write(JSON.stringify({ error: "ERROR occured: " + err }));
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(data));
        }
        
        response.end();
    });
};

exports.getEmployee = function (request, response) {
    var query = url.parse(request.url, true).query;
    var employeeId = query.Id;

    db.executeSql("SELECT * FROM " + settings.dbTable + " WHERE ID = " + employeeId, function (data, err) {
        if (err) {
            response.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            response.write(JSON.stringify({ error: "ERROR occured: " + err }));
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(data));
        }
        
        response.end();
    });
};

// Post
exports.addEmployee = function (request, response) {
    var query = url.parse(request.url, true).query;
    var employeeName = query.Name;
    var employeeAge = query.Age;
        
    db.executeSql("INSERT INTO " + settings.dbTable + " ([Name], [Age]) " +
    "VALUES('" + employeeName + "', " + employeeAge + ")", function (data, err) {
        if (err) {
            response.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            response.write(JSON.stringify({ error: "ERROR occured: " + err }));
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(data));
        }
        
        response.end();
    });
};

exports.updateEmployee = function (request, response) {
    var query = url.parse(request.url, true).query;
    var employeeId = query.Id;
    var employeeName = query.Name;
    var employeeAge = query.Age;
    
    db.executeSql("UPDATE " + settings.dbTable + " " +
    "SET [Name] = '" + employeeName + "', [Age] = " + employeeAge + " " +
    "WHERE [ID] = " + employeeId, function (data, err) {
        if (err) {
            response.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            response.write(JSON.stringify({ error: "ERROR occured: " + err }));
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(data));
        }
        
        response.end();
    });
};

exports.deleteEmployee = function (request, response, reqBody) {
    var query = url.parse(request.url, true).query;
    var employeeId = query.Id;

    db.executeSql("DELETE FROM " + settings.dbTable + " " +
    "WHERE [ID] = " + employeeId, function (data, err) {
        if (err) {
            response.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
            response.write(JSON.stringify({ error: "ERROR occured: " + err }));
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(data));
        }
        
        response.end();
    });
};