'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _signup = require('../shared/validations/signup');

var _signup2 = _interopRequireDefault(_signup);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('../database/models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//connect to database
var promise = _mongoose2.default.connect('mongodb://client:client@ds061076.mlab.com:61076/users', {
  useMongoClient: true
});

_mongoose2.default.connection.once('open', function () {
  console.log('Database connection made to client...');
}).on('err', function (err) {
  console.log("Client database connection error", err);
});

// Use native promises
_mongoose2.default.Promise = global.Promise;

router.post('/', function (req, res) {
  var _validateInput = (0, _signup2.default)(req.body),
      errors = _validateInput.errors,
      isValid = _validateInput.isValid;

  if (isValid) {

    var User = _mongoose2.default.model('User', _user2.default);

    var userOne = User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).save(function (err) {
      if (err) throw err;
      console.log('New user saved to database');
    });

    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }
});

exports.default = router;