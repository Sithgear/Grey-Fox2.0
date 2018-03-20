var express = require('express');
var sithgearApp = express();
var sithgearDB = require('./sithgearDB');
var pubFiles = express.static(__dirname + '/public');

sithgearApp.use('/public', pubFiles);


module.exports = sithgearApp;
