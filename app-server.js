'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();

app.use(_express2['default']['static']('./public'));
app.use(_express2['default']['static']('./node_modules/bootstrap/dist'));

app.listen(process.env.PORT, process.env.IP);
console.log("Polling server is running");