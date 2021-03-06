'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//create schema
var userSchema = new _mongoose2.default.Schema({
  username: String,
  email: String,
  password: String
});

exports.default = userSchema;