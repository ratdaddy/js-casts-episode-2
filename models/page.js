var fs = require('fs');

exports.all = function(fn) {
  fs.readdir('./pages', fn);
};

exports.find = function(name, fn) {
  fs.readFile('./pages/' + name, 'ascii', fn);
};

exports.create = exports.update = function(name, body, fn) {
  fs.writeFile('./pages/' + name, body, fn);
};

exports.remove = function(name, fn) {
  fs.unlink('./pages/' + name, fn);
};
