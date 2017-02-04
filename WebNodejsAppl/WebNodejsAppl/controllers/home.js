var fs = require("fs");
var jade = require('jade');
//var express = require('express');
//var app = express();

exports.load = function (request, response) {    
    //eval(fs.readFileSync('./scripts/home/Service.js').toString());
    //eval(fs.readFileSync('./scripts/home/ViewModel.js').toString());
    //eval(fs.readFileSync('./scripts/home/ViewModel.js').toString());    

    var data = fs.readFileSync("./views/home.html");
    var layoutLoad = jade.compileFile('./views/home.jade');
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(layoutLoad({ title: "Test" }));
        
    response.end();
}