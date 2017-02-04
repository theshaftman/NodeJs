
var http = require('http');
var routes = require('../routes');
var user = require('../routes/user');
var employee = require("../controllers/employee");

exports.createServer = function (app) {
    
    app.get('/', routes.index);
    app.get('/users', user.list);
    app.get("/getEmployees", employee.getList);
    
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
}