'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_PORT = 8081;
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.use('/api/users', _users2.default);

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'index.html'));
});

app.set("port", process.env.PORT || DEFAULT_PORT);
app.listen(app.get("port"), console.log("running on port", process.env.PORT || DEFAULT_PORT));