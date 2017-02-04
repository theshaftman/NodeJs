
var http = require('http');
var routes = require('../routes');
var user = require('../routes/user');
var employee = require("../controllers/employee");

exports.createServer = function (app) {
    
    app.get('/', routes.index);
    app.get('/users', user.list);
    app.get("/getEmployees", employee.getList);
    app.get("/getEmployee", employee.getEmployee);
    app.post("/createEmployee", employee.addEmployee);
    app.put("/updateEmployee", employee.updateEmployee);
    app.delete("/deleteEmployee", employee.deleteEmployee);
    
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
}