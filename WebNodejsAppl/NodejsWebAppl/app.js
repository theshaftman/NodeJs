﻿
/**
 * Module dependencies.
 */

var express = require('express');
var settings = require("./settings");
var server = require("./core/server");
var path = require('path');

var app = express();

// all environments
app.set('port', settings.webPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

server.createServer(app);
